import express from "express";
import {
  getAllItems,
  getItemsByCategory,
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/:categoryId", getItemsByCategory);

export default router;
