import { Router } from "express";
import { getProfile, login, signup, updateProfile } from "../controllers";
import { authenticateUser } from "../middlewares";

const router = Router();

router.route("/signup").post(signup);
router.route("/login").post(login);
router
	.route("/me")
	.get(authenticateUser, getProfile)
	.patch(authenticateUser, updateProfile);

export const userRouter = router;
