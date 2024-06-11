import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: "",
  reducers: {
    searchqry: (state, action) => {
     return action.payload;
      console.log(state);
    },
  },
});

export const { searchqry } = searchSlice.actions;
export default searchSlice.reducer;
