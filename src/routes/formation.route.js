import { Router } from "express";
import { createFormation, deleteFormation, updateFormation, getFormations } from
"../controllers/formation.controller.js";

const router = new Router();

router.route('/getFormations').get(getFormations);
router.route('/updateFormation').patch(updateFormation);
router.route('/deleteFormation').delete(deleteFormation);
router.route('/createFormation').post(createFormation);

export default router;