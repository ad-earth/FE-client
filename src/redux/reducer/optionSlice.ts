import { createSlice } from "@reduxjs/toolkit";
import { OptionListType } from "../../shared/types/types";

export interface optionDataType {
  optionData: OptionListType;
  cartModalOpen: boolean;
}

const initialState: optionDataType = {
  optionData: [],
  cartModalOpen: false,
};

const optionSlice = createSlice({
  name: "optionSlice",
  initialState,
  reducers: {
    setOptionData: (state, action) => {
      state.optionData = action.payload;
    },
    setModalOpen: (state, action) => {
      state.cartModalOpen = action.payload;
    },
  },
});

export const { setOptionData, setModalOpen } = optionSlice.actions;
export default optionSlice.reducer;
