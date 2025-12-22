import { Router } from "express";
import { createFormateur, deleteFormateur, updateFormateur, getFormateurs } from "../controllers/formateur.controller.js";
import { authenticate } from "../middlewares/auth.middleware.js";

const router = new Router();

router.route('/getFormateurs').get(getFormateurs);
router.route('/updateFormateur/:id').patch(authenticate,updateFormateur);
router.route('/deleteFormateur/:id').delete(authenticate,deleteFormateur);
router.route('/createFormateur').post(createFormateur);

export default router;