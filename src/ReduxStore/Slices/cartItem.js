import { createSlice } from "@reduxjs/toolkit";

const cartItem = createSlice({
  name: "CartItem",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const indexOfItem = state.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexOfItem === -1) {
        action.payload.quantity = 1;
        state.push(action.payload);
      } else if (indexOfItem >= 0) {
        state[indexOfItem].quantity += 1;
      }
    },
    removeItem: (state, action) => {
      console.log("printing from removeItem");
      return state.filter((item) => item.id !== action.payload);
    },
    quantityIncrementor: (state, action) => {
      const indexOfItem = state.findIndex((item) => item.id === action.payload);
      state[indexOfItem].quantity += 1;
    },
    quantityDecrementor: (state, action) => {
      const indexOfItem = state.findIndex((item) => item.id === action.payload);
      if (indexOfItem >= 0) {
        if (state[indexOfItem].quantity > 1) {
          state[indexOfItem].quantity -= 1;
        } else {
          return state.filter((item) => item.id !== action.payload);
        }
      }
    },
  },
});

export const { addItem, removeItem, quantityIncrementor, quantityDecrementor } = cartItem.actions;
export default cartItem.reducer;
