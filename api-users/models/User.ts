import mongoose from "mongoose";
import db from "./db";

const schema = new mongoose.Schema(
	{
		firstname: { type: String, required: true },
		lastname: { type: String, required: true },
		email: { type: String, required: true, unique: true },
		password: { type: String, required: true },
		role_id: { type: Number, required: true },
	},
	{
		timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
	},
);

const model = db.model("User", schema);

export default model;
