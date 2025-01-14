import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 items: [],
};
const cartSlice = createSlice({
 initialState,
 name: "cart",
 reducers: {
  addToCart: (state, action) => {
   const find = state.items.find((found) => found.id == action.payload.id);
   if (find) {
    find.quantity += 1;
   } else {
    const menuClone = { ...action.payload, quantity: 1 };
    state.items.push(menuClone);
   }
  },
  deleteFromCart: (state, action) => {
   state.items = state.items.filter((i) => i.id !== action.payload);
  },
  clearCart: (state) => {
   state.items = [];
  },
 },
});
export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
