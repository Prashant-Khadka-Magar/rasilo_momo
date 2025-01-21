import asyncHandler from "express-async-handler";
import { Menu } from "../models/Menu.model.js";

const getAllItems = asyncHandler(async (req, res) => {
  const items = await Menu.find({});

  res.send(items);
});

export { getAllItems };
