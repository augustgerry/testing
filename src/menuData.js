import React from "react";

const menuData = [
  {
    category: "Bakmi",
    items: [
      { name: "Bakmi Original", price: 35000 },
      { name: "Bakmi Sambal Matah", price: 38000 },
      { name: "Bakmi Chili Oil", price: 38000 },
      { name: "Bakmi Sambal Ijo", price: 38000 },
    ],
  },
  {
    category: "Appetizer",
    items: [
      { name: "French Fries Original", price: 25000 },
      { name: "French Fries Truffle Mushroom | BBQ Parmesan", price: 28000 },
      { name: "Onion Ring", price: 28000 },
      { name: "Chicken Wings Truffle Mushroom | BBQ Parmesan", price: 43000 },
      { name: "Crispy Mushroom", price: 28000 },
      { name: "Calamary Crispy", price: 30000 },
      { name: "Interaksi Platter", price: 65000 },
    ],
  },
  {
    category: "Salad",
    items: [{ name: "Chicken Caesar Salad", price: 38000 }],
  },
  {
    category: "Breakfast",
    items: [
      { name: "American Breakfast", price: 45000 },
      { name: "Omelette with Salad", price: 25000 },
    ],
  },
  {
    category: "Western",
    items: [
      { name: "Fettuccine Carbonara", price: 43000 },
      { name: "Spaghetti Aglio Olio", price: 40000 },
      { name: "Spaghetti Creamy Pesto", price: 43000 },
      { name: "Fish & Fries", price: 55000 },
      { name: "Grilled Chicken Steak", price: 53000 },
      { name: "Pizza Margarita", price: 65000 },
      { name: "Pizza Giosa", price: 65000 },
      { name: "Pizza Speciale", price: 70000 },
    ],
  },
  {
    category: "Ricebowl",
    items: [
      { name: "Asian Chicken Curry", price: 40000 },
      { name: "Nasi Telur Ceplok Pontianak", price: 25000 },
      { name: "Rice Bowl Dory Sambal Matah", price: 37000 },
      { name: "Rice Bowl Ayam Cabai Ijo", price: 37000 },
      { name: "Rice Bowl Dory Sambal Embe", price: 37000 },
      { name: "Rice Bowl Ayam Salted Egg", price: 37000 },
      { name: "Rice Bowl Ayam Sambal Matah", price: 37000 },
      { name: "Rice Bowl Ayam Cabai Ijo", price: 37000 },
      { name: "Rice Bowl Cumi Cabai Ijo", price: 42000 },
      { name: "Rice Bowl Cumi Sambal Matah", price: 42000 },
      { name: "Rice Bowl Cumi Sambal Embe", price: 42000 },
      { name: "Rice Bowl Udang Sambal Embe", price: 42000 },
      { name: "Rice Bowl Udang Cabai Ijo", price: 42000 },
      { name: "Rice Bowl Udang Sambal Matah", price: 42000 },
    ],
  },
  {
    category: "Nasi Goreng",
    items: [
      { name: "Nasi Goreng Interaksi", price: 43000 },
      { name: "Nasi Goreng Seafood", price: 45000 },
      { name: "Nasi Goreng Ayam Cabai Ijo", price: 40000 },
      { name: "Nasi Goreng Curry", price: 40000 },
    ],
  },
  {
    category: "Mie",
    items: [
      { name: "Mie Seafood Goreng", price: 45000 },
      { name: "Mie Rebus / Goreng Jawa", price: 40000 },
    ],
  },
  {
    category: "Pastry",
    items: [
      { name: "Croissant Chocolate", price: 30000 },
      { name: "Premium Butter Croissant", price: 25000 },
      { name: "Cheese Croissant", price: 30000 },
      { name: "Cinnamon Roll", price: 28000 },
    ],
  },
  {
    category: "Dessert",
    items: [
      { name: "Creme Brulee Coffee", price: 23000 },
      { name: "Brownies", price: 28000 },
      { name: "Pannacotta", price: 23000 },
    ],
  },
  {
    category: "Coffee",
    items: [
      { name: "Single Espresso (Hot)", price: 18000 },
      { name: "Double Espresso (Hot)", price: 22000 },
      { name: "Americano (Hot)", price: 25000 },
      { name: "Americano (Iced)", price: 27000 },
      { name: "Caffe Latte (Hot)", price: 27000 },
      { name: "Caffe Latte (Iced)", price: 29000 },
      { name: "Cappuccino (Hot)", price: 27000 },
      { name: "Cappuccino (Iced)", price: 30000 },
      { name: "Vanilla Latte (Hot)", price: 30000 },
      { name: "Vanilla Latte (Iced)", price: 33000 },
      { name: "Hazelnut Roasted Latte (Hot)", price: 32000 },
      { name: "Hazelnut Roasted Latte (Iced)", price: 35000 },
      { name: "Butterscotch Latte (Iced)", price: 37000 },
      { name: "Caramel Cheese Latte (Iced)", price: 35000 },
      { name: "Cinnamon Maple Latte (Hot)", price: 32000 },
      { name: "Cinnamon Maple Latte (Iced)", price: 35000 },
      { name: "Kopi Susu Interaksi (Iced)", price: 28000 },
      { name: "Creamy Dolce Latte (Iced)", price: 27000 },
      { name: "Berry's Latte (Iced)", price: 35000 },
    ],
  },
  {
    category: "Non Coffee",
    items: [
      { name: "Candy Rum (Iced)", price: 37000 },
      { name: "Mango Milky Boba (Iced)", price: 39000 },
      { name: "Strawberry Milky Boba (Iced)", price: 39000 },
      { name: "Creamy Chocolate (Hot)", price: 35000 },
      { name: "Creamy Chocolate (Iced)", price: 38000 },
      { name: "Red Velvet Latte (Hot)", price: 35000 },
      { name: "Red Velvet Latte (Iced)", price: 38000 },
      { name: "Taro Latte (Hot)", price: 35000 },
      { name: "Taro Latte (Iced)", price: 38000 },
      { name: "Matcha Latte (Hot)", price: 35000 },
      { name: "Matcha Latte (Iced)", price: 38000 },
    ],
  },
  {
    category: "Frappe",
    items: [
      { name: "Choco Queen (Iced)", price: 39000 },
      { name: "Green Punch (Iced)", price: 39000 },
      { name: "Butter Cookies (Iced)", price: 39000 },
      { name: "Durian Salted Cheese (Iced)", price: 39000 },
    ],
  },
  {
    category: "Mocktails",
    items: [
      { name: "Interaksi At The Sky (Iced)", price: 38000 },
      { name: "Lost In Summer (Iced)", price: 38000 },
      { name: "Spice Violet (Iced)", price: 38000 },
      { name: "Berrie's Kiss (Iced)", price: 38000 },
      { name: "Berry's Rum (Iced)", price: 38000 },
    ],
  },
  {
    category: "Tea",
    items: [
      { name: "Passion Fruit Tea (Iced)", price: 29000 },
      { name: "Lemonade Tea (Iced)", price: 29000 },
      { name: "Lychee Tea (Iced)", price: 29000 },
      { name: "Peach Tea (Iced)", price: 29000 },
      { name: "Green Tea (Hot)", price: 22000 },
      { name: "Green Tea (Iced)", price: 25000 },
      { name: "Mineral Water", price: 12000 },
    ],
  },
];

export default menuData;
