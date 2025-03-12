import axios from "axios";
import type { Request, Response } from "express";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;
const authenticationServiceUrl = process.env
	.AUTHENTICATION_SERVICE_URL as string;

export const authController = {
	showRegister: async (req: Request, res: Response) => {
		res.render("register");
	},
	register: async (req: Request, res: Response) => {
		const response = await axios.post(
			`${authenticationServiceUrl}/register`,
			req.body,
		);
		const newUser = response.data;
		console.log(newUser);

		res.redirect("/");
	},

	showLogin: async (req: Request, res: Response) => {
		res.render("login");
	},
	login: async (req: Request, res: Response) => {
		const response = await axios.post(
			`${authenticationServiceUrl}/login`,
			req.body,
		);

		const { token, user } = response.data;
		res.cookie("auth_token", token);
		res.cookie("connected_user", user);

		res.redirect("/");
	},
};
