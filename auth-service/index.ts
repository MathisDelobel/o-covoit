import express from "express";

const PORT = 3000;
const jwtSecret = process.env.JWT_SECRET as string;
const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
