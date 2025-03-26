import type { Request, Response } from "express";
import axios from "axios";

const apiUsersUrl = process.env.API_USERS_SERVICE_URL as string;

export const adminController = {
	dashboard: async (req: Request, res: Response) => {
		const response = await axios.get(`${apiUsersUrl}`);

		res.render("main", {
			data: { view: "admin/dashboard", users: response.data },
		});
	},
};
