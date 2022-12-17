import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PayCheckType {
  agree: boolean;
  tab: boolean;
  isName: boolean;
  isPNumber: boolean;
  isUserName: boolean;
  isUserPhone: boolean;
  clear: boolean;
}
const initialState = {
  agree: false,
  tab: false,
  isName: false,
  isPNumber: false,
  isUserName: false,
  isUserPhone: false,
  clear: false,
} as PayCheckType;

const payCheckSlice = createSlice({
  name: "payCheckReducer",
  initialState,
  reducers: {
    editAgree: (state, action: PayloadAction<boolean>) => {
      state.agree = action.payload;
    },
    editTab: (state, action: PayloadAction<boolean>) => {
      state.tab = action.payload;
    },
    editIsName: (state, action: PayloadAction<boolean>) => {
      state.isName = action.payload;
    },
    editisPNumber: (state, action: PayloadAction<boolean>) => {
      state.isPNumber = action.payload;
    },
    editIsUserName: (state, action: PayloadAction<boolean>) => {
      state.isUserName = action.payload;
    },
    editIsUserPhone: (state, action: PayloadAction<boolean>) => {
      state.isUserPhone = action.payload;
    },
    editClear: (state, action: PayloadAction<boolean>) => {
      state.clear = action.payload;
    },
  },
});

// createSlice 로 생성된 액션과 리듀서를 export 해준다.
export const {
  editAgree,
  editTab,
  editIsName,
  editisPNumber,
  editIsUserName,
  editIsUserPhone,
  editClear,
} = payCheckSlice.actions;
export default payCheckSlice.reducer;
