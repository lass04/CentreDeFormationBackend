import { Router } from "express";
import { createCandidat , getCandidats, updateCandidat, deleteCandidat} from "../controllers/candidat.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = new Router();

router.route('/getCandidats').get(authenticate,getCandidats);
router.route('/updateCandidat/:id').patch(updateCandidat);
router.route('/deleteCandidat/:id').delete(deleteCandidat);
router.route('/createCandidat').post(createCandidat);

export default router;