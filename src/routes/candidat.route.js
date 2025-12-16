import { Router } from "express";
import { createCandidat , getCandidats, updateCandidat, deleteCandidat} from "../controllers/candidat.controller.js";

const router = new Router();

router.route('/getCandidats').get(getCandidats);
router.route('/updateCandidat/:id').patch(updateCandidat);
router.route('/deleteCandidat/:id').delete(deleteCandidat);
router.route('/createCandidat').post(createCandidat);

export default router;