import axios from "axios";
import type { Request, Response } from "express";

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
			{
				validateStatus: (status) => status < 500, // Considère les codes 400 comme non bloquants
			},
		);

		const { token, user } = response.data;
		res.cookie("auth_token", token);
		res.cookie("connected_user", user);

		res.redirect("/");
	},

	showLogin: async (req: Request, res: Response) => {
		res.render("login");
	},
	login: async (req: Request, res: Response) => {
		const response = await axios.post(
			`${authenticationServiceUrl}/login`,
			req.body,
			{
				validateStatus: (status) => status < 500, // Considère les codes 400 comme non bloquants
			},
		);

		if (response.status !== 201) {
			req.flash("error", response.data.message || "Connexion failed");
			return res.redirect("/login");
		}

		const { token, user } = response.data;
		res.cookie("auth_token", token);
		res.cookie("connected_user", user);

		res.redirect("/");
	},

	logout: async (req: Request, res: Response) => {
		res.clearCookie("auth_token");
		res.clearCookie("connected_user");
		req.flash("info", "Vous êtes déconnecté");
		res.redirect("/");
	},
};
