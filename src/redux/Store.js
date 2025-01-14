import { configureStore } from "@reduxjs/toolkit";
import menuReducer from "./Slices/menuSlice";
import cartReducer from "./Slices/cartSlice";

export const store = configureStore({
 reducer: {
  menu: menuReducer,
  cart: cartReducer,
 },
});
