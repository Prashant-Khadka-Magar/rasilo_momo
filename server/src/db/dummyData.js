const enhancedMenuData = [
  {
    name: "Steam Momo",
    description: "Soft steamed dumplings with achar",
    price: 9.99,
    category: "Chicken Momo",
    isAvailable: true,
    imageUrl:
      "https://redhousespice.com/wp-content/uploads/2021/02/uncooked-dumplings-on-a-tray-scaled.jpeg",
    rating: 4.5,
    numReviews: 2,
    reviews: [
      {
        user: "64d2f3e1e8141b0012c43af4",
        name: "John Doe",
        rating: 5,
        comment: "Absolutely delicious, the dumplings are soft and flavorful!",
        reply: "Thank you for your kind words!",
      },
      {
        user: "64d2f3e1e8141b0012c43af5",
        name: "Jane Smith",
        rating: 4,
        comment: "Good taste, but the achar could be spicier.",
        reply: "We’ll improve the achar spice level next time!",
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
    rating: 5,
    numReviews: 1,
    reviews: [
      {
        user: "64d2f3e1e8141b0012c43af6",
        name: "Alice Brown",
        rating: 5,
        comment: "The soup is rich and aromatic, perfect with dumplings!",
        reply: "Glad you loved it!",
      },
    ],
  },
  {
    name: "Fry Momo",
    description: "Crispy fried dumplings with achar",
    price: 11.99,
    category: "Chicken Momo",
    isAvailable: false, // Example of unavailable item
    imageUrl:
      "https://static.toiimg.com/thumb/53281477.cms?imgsize=1884587&width=800&height=800",
    rating: 4.5,
    numReviews: 3,
    reviews: [
      {
        user: "64d2f3e1e8141b0012c43af7",
        name: "Chris Green",
        rating: 5,
        comment: "Super crispy and flavorful, my favorite momo!",
        reply: "We’re thrilled to hear that!",
      },
      {
        user: "64d2f3e1e8141b0012c43af8",
        name: "Bob White",
        rating: 4,
        comment: "Crispy, but could use more achar on the side.",
        reply: "Thanks for the feedback, Bob!",
      },
      {
        user: "64d2f3e1e8141b0012c43af9",
        name: "Ella Blue",
        rating: 4,
        comment: "Tasty, but a bit oily for my liking.",
        reply: "We’ll try to make it less oily next time.",
      },
    ],
  },
  {
    name: "Coke",
    description: "Just a can of Coke",
    price: 1.99,
    category: "Pop",
    isAvailable: true,
    imageUrl:
      "https://136324617.cdn6.editmysite.com/uploads/1/3/6/3/136324617/s868769048617568022_p132_i1_w10000.png?width=2560",
    rating: 4.6,
    numReviews: 1,
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
    rating: 4.6,
    numReviews: 2,
    reviews: [],
  },
];

export default enhancedMenuData;
