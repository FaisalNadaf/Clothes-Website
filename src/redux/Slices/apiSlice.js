/** @format */

import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
	name: "api",
	initialState: "https://www.adidas.co.in/api/plp/content-engine?query=men-shoes",
	reducers: {
		setApi: (state, action) => action.payload,
	},
});

export const { setApi } = apiSlice.actions;
export default apiSlice.reducer;
