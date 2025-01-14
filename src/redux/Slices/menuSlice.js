import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 items: [
  { id: 1, title: "Pizza", price: 8.99, image: "./menu/menu-1.jpg" },
  { id: 2, title: "Burrito", price: 9.99, image: "./menu/menu-2.jpg" },
  { id: 3, title: "Sause Pasta", price: 11.99, image: "./menu/menu-3.jpg" },
  { id: 4, title: "Bistro Pizza", price: 20.99, image: "./menu/menu-4.jpg" },
  { id: 5, title: "Chicken", price: 10.99, image: "./menu/menu-5.jpg" },
  { id: 6, title: "Biryani", price: 15.99, image: "./menu/menu-6.jpg" },
  {
   id: 7,
   title: "Tasty and Healty",
   price: 18.99,
   image: "./menu/menu-7.jpeg",
  },
  {
   id: 8,
   title: "Tasty and Healty",
   price: 25.99,
   image: "./menu/menu-8.jpeg",
  },
 ],
};
const menuSlice = createSlice({
 name: "menu",
 initialState,
 reducers: {},
});

export default menuSlice.reducer;
