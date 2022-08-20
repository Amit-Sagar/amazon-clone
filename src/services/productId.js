import { createSlice } from "@reduxjs/toolkit";

const productIdSlice = createSlice({
  name: "productId",
  initialState: { id: 0 },
  reducers: {
    getId(state, action) {
      state.id = action.payload;
    },
  },
});

export const productIdActions = productIdSlice.actions;
export default productIdSlice;
