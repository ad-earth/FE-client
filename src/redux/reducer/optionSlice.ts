import { createSlice } from "@reduxjs/toolkit";
import { OptionListType } from "../../shared/types/types";

export interface optionDataType {
  optionData: OptionListType;
}

const initialState: optionDataType = {
  optionData: [],
};

const optionSlice = createSlice({
  name: "optionSlice",
  initialState,
  reducers: {
    setOptionData: (state, action) => {
      state.optionData = action.payload;
    },
  },
});

export const { setOptionData } = optionSlice.actions;
export default optionSlice.reducer;
