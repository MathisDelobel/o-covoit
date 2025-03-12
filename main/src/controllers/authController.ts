import axios from "axios";
import type { Request, Response } from "express";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;

export const authController = {
	login: async (req: Request, res: Response) => {
		try {
			const response = await axios.post(`${apiUsersUrl}/login`, req.body, {
				headers: {
					Accept: "application/json",
					"Content-Type": "application/json",
				},
			});
			res.status(200).json(response.data);
		} catch (error) {
			res.status(500).json({ message: error, service: "main" });
		}
	},
};
