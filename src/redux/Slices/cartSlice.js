import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      // Check if the state is empty and add the payload if it is
      if (state.length < 1) {
        state.push(action.payload);
        return;
      }
      // Check if the product already exists in the state
      const exists = state.some(
        (ele) => ele.productId === action.payload.productId
      );
      // If it doesn't exist, add it to the state
       if (exists) {
 
       }
      if (!exists) {
        state.push(action.payload);
      }
    },

    removeItem: (state, action) => {
      console.log(action.payload);
      return state.filter((element) => element.productId !== action.payload);
    },
  },
});

export const { addItem, removeItem } = cartSlice.actions;
export default cartSlice.reducer;
