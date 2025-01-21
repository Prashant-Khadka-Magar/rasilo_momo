import express from "express";
import {
  login,
  logout,
  register,
  verifyOtp,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/verifyOTP", verifyOtp);

export default router;
