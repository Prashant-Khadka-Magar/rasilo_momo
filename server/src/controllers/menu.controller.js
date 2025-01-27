import asyncHandler from "express-async-handler";
import { Menu } from "../models/Menu.model.js";
import { Category } from "../models/category.model.js";
import mongoose from "mongoose";

const getAllItems = asyncHandler(async (req, res) => {
  const items = await Menu.find({});

  res.send(items);
});

const getItemsByCategory = asyncHandler(async (req, res) => {
  const { categoryId } = req.params;
  const { page = 1, limit = 10 } = req.query;

  const category = await Category.findById(categoryId);

  if (!category) {
    return res.status(404).json({ message: "Category not found" });
  }

  // Define the aggregation pipeline
  const pipeline = [
    {
      $match: {
        category: new mongoose.Types.ObjectId(categoryId),
      },
    },
  ];

  // Set pagination options
  const options = {
    page: parseInt(page),
    limit: parseInt(limit),
  };

  // Execute the aggregate query with pagination
  const result = await Menu.aggregatePaginate(pipeline, options);

  return res.status(200).json({
    status: "success",
    category: category.name,
    items: result.docs,
    pagination: {
      currentPage: result.page,
      totalPages: result.totalPages,
      totalItems: result.totalDocs,
      limit: result.limit,
    },
  });
});


export { getAllItems, getItemsByCategory };
