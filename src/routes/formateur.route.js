import { Router } from "express";
import { createFormateur, deleteFormateur, updateFormateur, getFormateurs } from "../controllers/formateur.controller.js";

const router = new Router();

router.route('/getFormateurs').get(getFormateurs);
router.route('/updateFormateur/:id').patch(updateFormateur);
router.route('/deleteFormateur/:id').delete(deleteFormateur);
router.route('/createFormateur').post(createFormateur);

export default router;