import { Router } from "express";
import { mainController } from "../controllers/mainController";
import { errorCatcher as er } from "../middlewares/errorCatcher";

export const router = Router();

router.post("/login", er(mainController.login));

router.post("/register", er(mainController.register));
