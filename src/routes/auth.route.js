import Router from "express";
import { login, logout, refresh } from "../controllers/auth.controller.js";

const router = new Router();

router.route("/refresh").post(refresh);
router.route("/login").post(login);
router.route("/logout").post(logout);

export default router;