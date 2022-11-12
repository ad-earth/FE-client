import { createSlice } from "@reduxjs/toolkit";
import { OptionListType } from "../../shared/types/types";

export interface optionDataType {
  optionData: OptionListType;
  cartModalOpen: boolean;
  replace: boolean;
}

const initialState: optionDataType = {
  optionData: [],
  cartModalOpen: false,
  replace: false,
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
    setReplace: (state, action) => {
      state.replace = action.payload;
    },
  },
});

export const { setOptionData, setModalOpen, setReplace } = optionSlice.actions;
export default optionSlice.reducer;
