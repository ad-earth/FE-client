import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PayCheckType {
  agree: boolean;
  tab: boolean;
}
const initialState = {
  agree: false,
  tab: false,
} as PayCheckType;

const payCheckSlice = createSlice({
  name: "payCheckReducer",
  initialState,
  reducers: {
    editAgree: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
    editTab: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
  },
});

// createSlice 로 생성된 액션과 리듀서를 export 해준다.
export const { editAgree, editTab } = payCheckSlice.actions;
export default payCheckSlice.reducer;
