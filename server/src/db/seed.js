import mongoose from "mongoose";
import { Menu } from "../models/Menu.model.js"; // Adjust the path

const menuSeedData = [
  // Chicken Momos
  {
    name: "Steam Momo",
    description: "Soft steamed dumplings with achar",
    price: 9.99,
    category: "Chicken Momo",
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
    category: "Chicken Momo",
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
    category: "Chicken Momo",
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
    category: "Veg Momo",
    isAvailable: true,
    imageUrl:
      "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2022/02/16/0/FNM_030122-Pork-Soup-Dumplings_s4x3.jpg.rend.hgtvcom.406.305.suffix/1645023412629.webp",
    reviews: [],
  },
  {
    name: "Veg Jhol Momo",
    description: "Steamed veggie dumplings served with flavorful soup",
    price: 9.99,
    category: "Veg Momo",
    isAvailable: true,
    imageUrl:
      "https://i0.wp.com/www.valerieskeepers.com/wp-content/uploads/2015/01/Wonton-Soup1.jpg?ssl=1",
    reviews: [],
  },
  {
    name: "Veg Fry Momo",
    description: "Crispy fried veggie dumplings with achar",
    price: 9.99,
    category: "Veg Momo",
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
    category: "Pop",
    isAvailable: true,
    imageUrl:
      "https://136324617.cdn6.editmysite.com/uploads/1/3/6/3/136324617/s868769048617568022_p132_i1_w10000.png?width=2560",
    reviews: [],
  },
  {
    name: "Pepsi",
    description: "Just a can of Pepsi",
    price: 1.99,
    category: "Pop",
    isAvailable: true,
    imageUrl:
      "https://giftshop.sunnybrook.ca/cdn/shop/products/IMG_20210114_111605.png?v=1610642125",
    reviews: [],
  },
  // Add more categories here like sides, laphing, etc.
];

const seedDatabase = async () => {
  try {
    await mongoose.connect("mongodb+srv://rasilomomo:ThaxainaMalai@rasilodb.hvche.mongodb.net/", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected!");

    // Clear the existing data
    await Menu.deleteMany();
    console.log("Existing menu data cleared.");

    // Insert the new data
    await Menu.insertMany(menuSeedData);
    console.log("Menu data seeded successfully!");

    process.exit();
  } catch (error) {
    console.error("Error seeding database:", error);
    process.exit(1);
  }
};

seedDatabase();
