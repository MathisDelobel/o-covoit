// Express => framework NodeJS pour la mise en place de serveur HTTP
import express from "express";
import { mainController } from "./src/controllers/mainController";

// On définit le port sur lequel le serveur va écouter
//     => devra à terme être dans une variable d'environnement
const PORT = 3000;

// On initialise notre application Express
const app = express();

app.use(express.json());

app.get("/", mainController.home);

// Faite en sorte que le serveur écoute le PORT défini
app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
