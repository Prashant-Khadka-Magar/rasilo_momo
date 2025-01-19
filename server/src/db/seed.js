import MenuItem from "../models/Menu.model.js";
import dummyData from "./dummyData.js";

const seedDatabase = async () => {
  try {
    await MenuItem.deleteMany(); // Clear existing data
    await MenuItem.insertMany(dummyData); // Insert dummy data
    console.log("Dummy data inserted successfully!");
    process.exit(); // Exit the script
  } catch (error) {
    console.error("Error inserting dummy data:", error);
    process.exit(1);
  }
};

seedDatabase();
