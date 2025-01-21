import express from "express";
import { getAllItems } from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getAllItems);

export default router;
