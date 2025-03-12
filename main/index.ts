// Express => framework NodeJS pour la mise en place de serveur HTTP
import express from "express";
import { router } from "./src/router/router";
import cookieParser from "cookie-parser";

// On définit le port sur lequel le serveur va écouter
//     => devra à terme être dans une variable d'environnement
const PORT = 3000;

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

app.use(router);

// Faite en sorte que le serveur écoute le PORT défini
app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
