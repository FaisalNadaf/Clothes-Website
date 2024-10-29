/** @format */

import { createSlice } from "@reduxjs/toolkit";

const apiSlice = createSlice({
	name: "api",
	initialState:
		"https://www.adidas.co.in/api/plp/content-engine?query=men-shoes",
	reducers: {
		api: (state, action) => {
			return action.payload;
		},
	},
});

export const { api } = apiSlice.actions;
export default apiSlice.reducer;
