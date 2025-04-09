import { Router } from "express";
import { errorCatcher as er } from "../middlewares/errorCatcher";
import { journeyController } from "../controllers/journeyController";

export const router = Router();

router.get("/journeys", er(journeyController.getAllJourneys));
