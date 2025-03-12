import type { Request, Response } from "express";
import { Router } from "express";
import { controllerWrapper as cw } from "../controllers/wrapperController";
import { userController } from "../controllers/userController";

export const router = Router();

router.get("/", cw(userController.getAllUsers));
router.post("/", cw(userController.createUser));

router.get("/:email", cw(userController.getOneUser));
