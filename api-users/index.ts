import express from "express";
import type { Request, Response } from "express";
import User from "./models/User";
const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, () => {
	console.log(`Server started at http://localhost:${PORT}`);
});

app.get("/", async (req: Request, res: Response) => {
	try {
		const users = await User.find();
		res.status(200).json(users);
	} catch (err) {
		res.status(500).json({ message: err, service: "api-users" });
	}
});
