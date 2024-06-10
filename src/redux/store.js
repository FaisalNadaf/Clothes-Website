import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import searchSlice from "./Slices/searchSlice";

const store = configureStore({
  reducer: {
    cart: cartSlice,
    search: searchSlice,
  },
});

export default store;
