import express from "express";
import { bodySanitizerMiddleware } from "./middlewares/sanitizer";
import { router } from "./routers/router";
import axios from "axios";

const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodySanitizerMiddleware);
// Interceptor pour gérer le statut 404
axios.interceptors.response.use(
	(response) => {
		// Si la réponse est réussie (autres statuts que 404), on la retourne telle quelle
		return response;
	},
	(error) => {
		// Si l'erreur est un 404, on retourne un objet personnalisé
		if (error.response && error.response.status === 404) {
			return Promise.resolve(error.response); // Retourne l'erreur 404 sans bloquer
		}

		// Pour toutes les autres erreurs, on laisse Axios gérer l'erreur normalement
		return Promise.reject(error);
	},
);
app.use(router);

app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
