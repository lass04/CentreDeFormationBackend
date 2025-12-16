import { Router } from "express";
import { createCandidat , getCandidats} from "../controllers/candidat.controller.js";

const router = new Router();

router.route('/getCandidats').get(getCandidats);
//router.route('/updateCandidat').patch();
//router.route('/deleteCandidat').delete();
router.route('/createCandidat').post(createCandidat);

export default router;