/** @format */

import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./Slices/cartSlice";
import searchSlice from "./Slices/searchSlice";
import apiSlice from "./Slices/apiSlice";
const store = configureStore({
	reducer: {
		cart: cartSlice,
		search: searchSlice,
		api: apiSlice,
	},
});

export default store;
