import { createSlice } from "@reduxjs/toolkit";
import { addItemToCart, removeItemFromCart, resetShippingCost } from "./carUtils";

const SHIPPING_COST = 6.55;
const INITIAL_STATE = {
  cartItems: [],
  shippingCost: 0,
  hidden: true,
};

const cartSlice = createSlice({
  name: "cart",
  initialState: INITIAL_STATE,
  reducers: {
    addToCart: (state, action) => {
      state.cartItems = addItemToCart(state.cartItems || [], action.payload);
      state.shippingCost = SHIPPING_COST;
    },    
    removeFromCart: (state, action) => {
      state.cartItems = removeItemFromCart(state.cartItems, { id: action.payload });
      state.shippingCost = resetShippingCost(state.cartItems, SHIPPING_COST);
    },
    clearCart: (state) => {
      state.cartItems = [];
      state.shippingCost = 0;
    },
    toggleHiddenCart: (state) => {
      state.hidden = !state.hidden;
    },
    increaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.cartItems.find(item => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, toggleHiddenCart, increaseQuantity, decreaseQuantity } = cartSlice.actions;

export default cartSlice.reducer;
