import { createSlice, current } from "@reduxjs/toolkit";

export const cartSlice = createSlice({
  name: "cart",
  initialState: { items: [] },
  reducers: {
    addItem: (state, action) => {
      state.items.push(action.payload);
    },
    removeItem: (state, action) => {
      console.log("state", current(state)); // To view the data without this it will show only object
      console.log("Id", action);
      state.items = action.payload;
    },
    clearCart: (state) => {
      console.log("state", current(state));
      state.items.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
