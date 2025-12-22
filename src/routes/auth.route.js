import Router from "express";
import { login, logout, refresh } from "../controllers/auth.controller.js";
import { authLimiter } from "../middlewares/Limiters.middleware.js";

const router = new Router();

router.route("/refresh").post(refresh);
router.route("/login").post(authLimiter,login);
router.route("/logout").post(logout);

export default router;