import express from "express";
import {
  getAllCategories,
  getAllItems,
  getItemsByCategory,
} from "../controllers/menu.controller.js";

const router = express.Router();

router.get("/", getAllItems);
router.get("/by-category", getItemsByCategory);
router.get("/categories", getAllCategories);

export default router;
