import axios from "axios";
import type { Request, Response } from "express";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;
const authServiceUrl = process.env.AUTH_SERVICE_URL as string;

export const authController = {
	showRegister: async (req: Request, res: Response) => {
		res.render("register");
	},
	register: async (req: Request, res: Response) => {
		const response = await axios.post(`${authServiceUrl}/register`, req.body);
		const newUser = response.data;
		console.log(newUser);

		res.redirect("/");
	},

	showLogin: async (req: Request, res: Response) => {
		res.render("login");
	},
	login: async (req: Request, res: Response) => {
		const response = await axios.post(`${authServiceUrl}/login`, req.body);

		// Une fois qu'on a le token, on le stocke dans un cookie
		const { token, user } = response.data;
		console.log(token, user);

		res.cookie("auth_token", token);
		res.cookie("connected_user", user);

		res.redirect("/");
	},
};
