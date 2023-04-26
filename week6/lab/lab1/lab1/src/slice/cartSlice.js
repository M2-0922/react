// Create a Redux store using Redux Toolkit that manages a simple shopping cart. Define a new slice of state called `cart` with an initial state of an empty array. Create two new reducers: `addItem` and `removeItem`, which add and remove items from the cart array, respectively. The `addItem` reducer should take a payload that includes an object representing a new item to add, with fields for `id`, `name`, and `price`. The `removeItem` reducer should take a payload that includes an `id` field representing the ID of the item to remove, and remove that item from the `cart` array.

import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cart: [
      {
        id: 1,
        name: "Iphone 12 Pro",
        price: 599
      }
    ],
  },
  reducers: {
    addItem: (state, action) => {
      state.cart.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
