import express from "express";
import type { Request, Response } from "express";
import axios from "axios";
import routesConfig from "./acl";

const PORT = 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const authorizationUrl = process.env.AUTHORIZATION_SERVICE_URL as string;

// L'API attend un token dans le header et deux paramètres dans le body :
// - method : GET, POST, PUT, DELETE, PATCH, etc.
// - path : url de la page sur laquelle on veut accéder : /, /users, /users/json, etc.
// Dans method et path, on donne les information de la route à laquelle on essaye d'accéder.
app.post("/", async (req: Request, res: Response) => {
	const { method, path } = req.body;

	const allowedRoles = routesConfig[path]?.[method];

	// Si la route n'est pas dans la config de l'ACL, c'est qu'elle est publique, donc tout le monde a le droit d'y acceder
	if (!allowedRoles) {
		res.sendStatus(200);
		return;
	}

	// On récupère le token JWT dans l'entête Authorization de la requete HTTP
	const token = req.headers.authorization;

	// Si la route est protégée mais qu'il n'y a pas de token
	if (!token) {
		res.status(401).json({ error: "Authentification requise" });
		return;
	}

	try {
		// Envoyer la liste complète des rôles autorisés au service d'autorisation
		await axios.post(
			authorizationUrl,
			{ allowedRoles },
			{
				headers: {
					Authorization: token,
				},
			},
		);

		// Si on arrive ici, c'est que le service a validé au moins un des rôles
		res.sendStatus(204);
	} catch (error: any) {
		const errorCode = error.response?.status || 500;
		const errorMessage =
			error.response?.data?.error || "Une erreur est survenue";

		res.status(errorCode).json({ error: errorMessage });
	}
});

app.listen(PORT, () => {
	console.log(`Serveur ACL démarré sur le port ${PORT}`);
});
