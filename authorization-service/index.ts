import express from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";

const PORT = 3000;

const jwtSecret = process.env.JWT_SECRET as string;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

interface JWTUser extends JwtPayload {
	id: string;
	role_id: number;
	email: string;
}

// Cette API peut prendre en paramètre plusieurs rôles sous forme de tableau.
// Si le token correspond à au moins un des rôles de allowedRoles, alors on est autorisé à accéder à la ressource.

// En résumé, ce microservice sert à nous dire si un token correspond à un rôle d'une liste.
// Réponse possible :
// - 204 : Accès autorisé => Tout est ok, tu as la permission
// - 401 : Accès non autorisé => T'as besoin de te connecter.
// - 403 : Accès refusé => Tu es bien connecté, mais tu ne corresponds pas à la liste de roles autorisées.
app.post("/", (req: Request, res: Response) => {
	// On récupère le token JWT dans l'entête Authorization de la requete HTTP
	const token = req.headers.authorization;

	// On vérifie que le token est bien présent
	if (!token) {
		res
			.status(401)
			.json({ error: "Accès non autorisé - vous devez vous connecter" });
		return;
	}

	try {
		// On vérifie que le token est valide et on récupère les données que le microservice d'authentification a mis dedans
		const tokenData: JWTUser = jwt.verify(token, jwtSecret) as JWTUser;

		// On vérifie que le role de l'utilisateur fait partie des rôles autorisés
		const allowedRoles = req.body.allowedRoles;

		// Exemple : Si mon allowedRoles est [1, 2] (admin ou user) et que mon tokenData.role_id est 2, alors je suis autorisé
		// Exemple 2: Si mon allowedRoles est [1] (que admin) et que mon tokenData.role_id est 2, alors je ne suis pas autorisé
		if (
			!Array.isArray(allowedRoles) ||
			!allowedRoles.includes(tokenData.role_id)
		) {
			res.status(403).json({ error: "Accès refusé" });
			return;
		}

		// Si tout est bon, on renvoie un statut 204 (No Content)
		res.sendStatus(204);
	} catch (error: any) {
		const errorMessage =
			error.name === "TokenExpiredError" ? "Token expiré" : error.message;
		res.status(401).json({ error: errorMessage });
	}
});

app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
