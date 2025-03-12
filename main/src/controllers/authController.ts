import axios from "axios";
import type { Request, Response } from "express";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;

export const authController = {
	showRegister: async (req: Request, res: Response) => {
		res.render("register");
	},
	register: async (req: Request, res: Response) => {
		const response = await axios.post(`${apiUsersUrl}/api/users`, req.body);
		const newUser = response.data;
		console.log(newUser);

		res.redirect("/");
	},

	showLogin: async (req: Request, res: Response) => {
		res.render("login");
	},
};
