import type { Request, Response } from "express";
import axios from "axios";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;

export const mainController = {
	home: async (req: Request, res: Response) => {
		try {
			const response = await axios.get(apiUsersUrl);
			res.status(200).json(response.data);
		} catch (error) {
			res.status(500).json({ message: error, service: "main" });
		}
	},
};
