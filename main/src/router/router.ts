import { Router } from "express";
import { mainController } from "../controllers/mainController";
import { authController } from "../controllers/authController";
import { journeyController } from "../controllers/journeyController";
import { adminController } from "../controllers/adminController";
import { errorCatcher as er } from "../middleware/errorCatcher";

export const router = Router();

router.get("/", mainController.home);

router.get("/admin/dashboard", adminController.dashboard);

router.get("/register", er(authController.showRegister));
router.post("/register", er(authController.register));

router.get("/login", er(authController.showLogin));
router.post("/login", er(authController.login));

router.get("/logout", er(authController.logout));

router.get("/journey/find", er(journeyController.showFind));
router.get("/journey/create", er(journeyController.showCreate));
