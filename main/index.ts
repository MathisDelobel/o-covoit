// Express => framework NodeJS pour la mise en place de serveur HTTP
import express from "express";
import { router } from "./src/router/router";
import cookieParser from "cookie-parser";
import axios from "axios";

// On définit le port sur lequel le serveur va écouter
//     => devra à terme être dans une variable d'environnement
const PORT = 3000;

const aclUrl = process.env.ACL_SERVICE_URL as string;

// On initialise notre application Express
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.set("view engine", "ejs");
app.set("views", "src/views");

// Middleware pour extraire le token et le passer aux vues
app.use((req, res, next) => {
	res.locals.auth_token = req.cookies?.auth_token;
	res.locals.connected_user = req.cookies?.connected_user;
	next();
});

// Middleware de vérification des autorisations pour toutes les routes
// Il faut impérativement le mettre avant nos routes.
// - On a des routes définies dans le main. On doit vérifier si l'utilisateur a le droit d'accéder à ces routes.
// - On demande au service ACL si l'utilisateur peut y aller.
// - Le service ACL sait que telle route est permise à tel et tel rôle.
// - Il demande donc aux services d'autorisation si le token correspond à un de ces rôles.
// - Une fois qu'il a chopé les infos, il nous dit oui tu passes ou non tu passes pas.
// En gros :
// - Le service ACL sert à dire si un role à accès à une route.
// - Le service d'autorisation sert à dire si un token correspond à une liste de roles.
app.use(async (req, res, next) => {
	try {
		// On cherche la route correspondante dans le stack
		const route = app._router.stack
			.filter((layer: any) => layer.route) // On garde que les layers qui sont des routes
			.find((layer: any) => {
				// On vérifie si la route correspond exactement ou si elle correspond à un pattern avec des paramètres
				const match =
					layer.route.path === req.path || layer.regexp.test(req.path);

				// Si la route correspond et que la méthode correspond, on retourne la route
				return match && layer.route.methods[req.method.toLowerCase()];
			});

		const routePath = route ? route.route.path : req.path;

		// On appelle le microservice acl-service avec axios pour vérifier les autorisations
		await axios.post(
			aclUrl,
			{ method: req.method, path: routePath },
			{
				headers: {
					Authorization: req.cookies?.auth_token,
				},
			},
		);

		// Si tout est bon, on passe la main au prochain middleware
		next();
	} catch (error: any) {
		// Si on reçoit une erreur 401, c'est que l'utilisateur n'est pas authentifié ou que son token a expiré.
		// On s'assure de supprimer le cookie avant de rediriger vers la page de login.
		if (error.response?.status === 401) {
			res.clearCookie("auth_token");
			res.clearCookie("connected_user");
			return res.redirect("/login");
		}

		const errorCode = error.response?.status || 500;
		const errorMessage =
			error.response?.data?.error ||
			"Une erreur est survenue lors de la vérification des autorisations";

		res.status(errorCode).render("home", { error: errorMessage });
	}
});

app.use(router);

// Faite en sorte que le serveur écoute le PORT défini
app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
