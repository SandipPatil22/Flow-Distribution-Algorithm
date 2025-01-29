import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { createuser, login } from "../controllers/user.controller.js";
const router = Router();

router.route("/create-user").post(createuser);
router.route("/login-user").post(login);

export default router;
