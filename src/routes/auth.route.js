import Router from "express";
import { login, logout, refreshToken } from "../controllers/auth.controller.js";

const router = new Router();

router.route("/refresh",refreshToken);
router.route("/login",login);
router.route("/logout",logout);

export default router;