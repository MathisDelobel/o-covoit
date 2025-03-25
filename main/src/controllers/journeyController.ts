import type { Request, Response } from "express";

export const journeyController = {
	showFind: async (req: Request, res: Response) => {
		res.render("main", { data: { view: "journey/find" } });
	},
	showCreate: async (req: Request, res: Response) => {
		res.render("main", { data: { view: "journey/create" } });
	},
};
