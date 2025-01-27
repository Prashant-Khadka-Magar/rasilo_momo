import mongoose from "mongoose";
import { Menu } from "../models/Menu.model.js";
import { Category } from "../models/category.model.js";
import dotenv from "dotenv";

dotenv.config({
  path: "./.env",
});

const menuSeedData = [
  // Chicken Momos
  {
    name: "Steam Momo",
    description: "Soft steamed dumplings with achar",
    price: 9.99,
    category: "Chicken Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2021/02/uncooked-dumplings-on-a-tray-scaled.jpeg",
    reviews: [
      {
        customerName: "John Doe",
        rating: 4.5,
        comment: "Delicious and fresh!",
      },
    ],
  },
  {
    name: "Jhol Momo",
    description: "Dumplings served with flavorful soup",
    price: 11.99,
    category: "Chicken Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://mrsgrg.wordpress.com/wp-content/uploads/2015/01/img_0785-0.jpg?w=1200",
    reviews: [
      {
        customerName: "Jane Smith",
        rating: 5,
        comment: "Best momo in town!",
      },
    ],
  },
  {
    name: "Fry Momo",
    description: "Crispy fried dumplings with achar",
    price: 11.99,
    category: "Chicken Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://static.toiimg.com/thumb/53281477.cms?imgsize=1884587&width=800&height=800",
    reviews: [],
  },
  // Veg Momos
  {
    name: "Veg Steam Momo",
    description: "Steamed veggie dumplings with achar",
    price: 9.99,
    category: "Veg Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/02/16/0/FNM_030122-Pork-Soup-Dumplings_s4x3.jpg.rend.hgtvcom.406.305.suffix/1645023412629.webp",
    reviews: [],
  },
  {
    name: "Veg Jhol Momo",
    description: "Steamed veggie dumplings served with flavorful soup",
    price: 9.99,
    category: "Veg Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/01/Wonton-Soup1.jpg?ssl=1",
    reviews: [],
  },
  {
    name: "Veg Fry Momo",
    description: "Crispy fried veggie dumplings with achar",
    price: 9.99,
    category: "Veg Momo", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://images.getrecipekit.com/20221124014158-pan-fried-soup-dumplings-1.png?aspect_ratio=4:3&quality=90&",
    reviews: [],
  },
  // Drinks
  {
    name: "Coke",
    description: "Just a can of Coke",
    price: 1.99,
    category: "Pop", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://136324617.cdn6.editmysite.com/uploads/1/3/6/3/136324617/s868769048617568022_p132_i1_w10000.png?width=2560",
    reviews: [],
  },
  {
    name: "Pepsi",
    description: "Just a can of Pepsi",
    price: 1.99,
    category: "Pop", // Set to the name of the category
    isAvailable: true,
    imageUrl:
      "https://giftshop.sunnybrook.ca/cdn/shop/products/IMG_20210114_111605.png?v=1610642125",
    reviews: [],
  },
];

const categorySeedData = [
  {
    name: "Chicken Momo",
    description: "Delicious chicken-filled dumplings",
  },
  {
    name: "Veg Momo",
    description: "Vegetarian dumplings filled with fresh veggies",
  },
  {
    name: "Pop",
    description: "Carbonated soft drinks",
  },
];

const seedData = async () => {
  try {
    // Connect to MongoDB
    await mongoose.connect(`${process.env.MONGODB_URL}`);

    // Clear existing data
    await Menu.deleteMany({});
    await Category.deleteMany({});

    // Seed Categories
    const categories = await Category.insertMany(categorySeedData);

    // Map category names to their ObjectIds
    const categoryMap = categories.reduce((map, category) => {
      map[category.name] = category._id;
      return map;
    }, {});

    // Update Menu data with correct category ObjectIds
    const updatedMenuData = menuSeedData.map((menuItem) => ({
      ...menuItem,
      category: categoryMap[menuItem.category], // This will now work correctly
    }));

    // Seed Menus
    await Menu.insertMany(updatedMenuData);

    console.log("Data seeded successfully!");
  } catch (error) {
    console.error("Error seeding data:", error);
  } finally {
    // Close the connection
    mongoose.connection.close();
  }
};

seedData();

seedData();
