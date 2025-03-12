import type { Request, Response } from "express";
import User from "../models/User";

export const userController = {
	/**
	 * Retourne la liste des users
	 * @param req
	 * @param res
	 */
	getAllUsers: async (req: Request, res: Response) => {
		const users = await User.find();
		res.status(200).json(users);
	},

	/**
	 * Retourne un user
	 * @param req
	 * @param res
	 */
	getOneUser: async (req: Request, res: Response) => {
		const email = req.params.email;
		const user = await User.findOne({ email: email });
		if (!user) {
			return res.status(404).json({ message: "User not found" });
		}
		res.status(200).json(user);
	},

	createUser: async (req: Request, res: Response) => {
		const user = new User(req.body);
		await user.save();
		if (!user) {
			return res.status(400).json({ message: "User not created" });
		}
		res.status(201).json(user);
	},
};
