import { Router } from "express";
import { createSession, deleteSession, updateSession, getSessions } from
"../controllers/session.controller.js";

const router = new Router();

router.route('/getSessions').get(getSessions);
router.route('/updateSession').patch(updateSession);
router.route('/deleteSession').delete(deleteSession);
router.route('/createSession').post(createSession);

export default router;