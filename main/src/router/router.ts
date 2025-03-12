import express from "express";
import { Router } from "express";
import { mainController } from "../controllers/mainController";
import { authController } from "../controllers/authController";

export const router = Router();

router.get("/", mainController.home);
router.get("/:email", authController.login);
