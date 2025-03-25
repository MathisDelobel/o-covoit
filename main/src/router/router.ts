import { Router } from "express";
import { mainController } from "../controllers/mainController";
import { authController } from "../controllers/authController";
import { journeyController } from "../controllers/journeyController";

export const router = Router();

router.get("/", mainController.home);

// router.get("/admin/dashboard", mainController.dashboard);

router.get("/register", authController.showRegister);
router.post("/register", authController.register);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);

router.get("/logout", authController.logout);

router.get("/journey/find", journeyController.showFind);
router.get("/journey/create", journeyController.showCreate);
