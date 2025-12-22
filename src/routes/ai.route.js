import { Router } from "express";
import { getAIStatsForFormations } from "../controllers/ai.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";
import { aiLimiter } from "../middlewares/Limiter.middleware.js";

const router = new Router();

router.route('/getStatsFormations').get(aiLimiter,authenticate,getAIStatsForFormations);

export default router;