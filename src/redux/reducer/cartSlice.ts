import { createSlice } from "@reduxjs/toolkit";

export interface CartDataType {
  checkedItems: number[];
}

const initialState: CartDataType = {
  checkedItems: [],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCheckedItems: (state, action) => {
      state.checkedItems = action.payload;
    },
  },
});

export const { setCheckedItems } = cartSlice.actions;
export default cartSlice.reducer;
