import { Router } from "express";
import { getUser, register } from "../controllas/user.controller.js";

const router = Router();

router.route("/").get(getUser);
router.route("/register").post(register);
// router.route("/login").post();

// router.route("/").get(getUser);

export default router;
