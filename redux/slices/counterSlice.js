import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: 4,
  },
  reducers: {
    increment: (state) => {
      state.data += 1
    },
  },
});

export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
