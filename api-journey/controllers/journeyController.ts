import type { Request, Response } from "express";
import Journey from "../models/Journey";

export const journeyController = {
	/**
	 * Retourne la liste des Journeys
	 * @param req
	 * @param res
	 */
	getAllJourneys: async (req: Request, res: Response) => {
		const journeys = await Journey.findAll();
		res.status(200).json(journeys);
	},

	/**
	 * Retourne un Journey
	 * @param req
	 * @param res
	 */
	getOneJourney: async (req: Request, res: Response) => {
		const id = req.params.id;
		const journey = await Journey.findByPk(id);
		if (!journey) {
			return res.status(404).json({ error: "Journey not found" });
		}
		res.status(200).json(journey);
	},
};
