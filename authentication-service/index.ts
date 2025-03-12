import express from "express";
import { bodySanitizerMiddleware } from "./middlewares/sanitizer";
import { router } from "./routers/router";

const PORT = 3000;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(bodySanitizerMiddleware);
app.use(router);

app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
