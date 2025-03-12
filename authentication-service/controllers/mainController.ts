import type { Request, Response } from "express";
import axios from "axios";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;
const jwtSecret = process.env.JWT_SECRET as string;

// Fonction utilitaire pour créer un token JWT
function createToken(data: { id: string; role_id: number }) {
	return jwt.sign(data, jwtSecret, { expiresIn: "1h" });
}

export const mainController = {
	login: async (req: Request, res: Response) => {
		const { email, password } = req.body;

		// Vérifie en base de données si on a un user qui correspond à l'email
		const response = await axios.get(`${apiUsersUrl}/${email}`);
		const user = response.data;
		if (!user) {
			return res.status(400).json({ message: "Connexion failed" });
		}

		// Si oui, on vérifie le mot de passe
		const match = bcrypt.compareSync(password, user.password);
		if (!match) {
			return res.status(400).json({ message: "Connexion failed" });
		}

		// Si le mot de passe est bon, on génère un token JWT
		const token = createToken({ id: user._id, role_id: user.role_id });

		// On renvoie le token JWT
		res.status(201).json({ token, user });
	},

	register: async (req: Request, res: Response) => {
		const { firstname, lastname, email, password, role_id } = req.body;

		// Validation des données
		if (!firstname || !lastname || !email || !password || !role_id) {
			return res.status(400).json({
				message:
					"Please provide all required fields: firstname, lastname, email, password, role_id",
			});
		}

		// Vérification si l'utilisateur existe déjà
		try {
			await axios.get(`${apiUsersUrl}/${email}`);
			return res.status(400).json({ message: "User already exists" });
		} catch (error) {
			// Ne rien faire, si on arrive là, c'est que l'utilisateur n'existe pas, donc c'est bon
		}

		const hashedPassword = bcrypt.hashSync(password, 10);

		const newUser = await axios.post(`${apiUsersUrl}`, {
			firstname,
			lastname,
			email,
			password: hashedPassword,
			role_id: Number.parseInt(role_id),
		});

		const createdUser = newUser.data;
		if (!createdUser) {
			return res.status(400).json({ message: "User not created" });
		}

		const token = createToken({
			id: createdUser._id,
			role_id: createdUser.role_id,
		});

		res.status(201).json({ token, user: createdUser });
	},
};
