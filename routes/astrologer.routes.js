import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
  assignUser,
  getAstrologerInfo,
  registerAstrologer,
} from "../controllers/astrologer.controller.js";
const router = Router();

router.route("/registerAstrologer").post(registerAstrologer);
router.route("/assignuser/:userId").post(assignUser);
router.route("/astrologerInfo/:astroID").get(getAstrologerInfo);

export default router;
