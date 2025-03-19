import { Router } from "express";
import { mainController } from "../controllers/mainController";
import { authController } from "../controllers/authController";

export const router = Router();

router.get("/", mainController.home);

router.get("/register", authController.showRegister);
router.post("/register", authController.register);

router.get("/login", authController.showLogin);
router.post("/login", authController.login);

router.get("/logout", authController.logout);
