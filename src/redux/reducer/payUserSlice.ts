import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  dNo?: string;
  name: string;
  pNumber: string;
  zipcode: string;
  address1: string;
  address2: string;
  memo: string;
}

const initialState = {
  //address//
  dNo: "null",
  name: "",
  pNumber: "",
  zipcode: "",
  address1: "",
  address2: "",
  memo: "배송 메모가 없습니다",
} as PaymentState;

const payUserSlice = createSlice({
  name: "paymentReducer",
  initialState,
  reducers: {
    //address//
    editDNo: (state, action: PayloadAction<string>) => {
      state.dNo = action.payload;
    },
    editName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    editPNumber: (state, action: PayloadAction<string>) => {
      state.pNumber = action.payload;
    },
    editZipcode: (state, action: PayloadAction<string>) => {
      state.zipcode = action.payload;
    },
    editAddress1: (state, action: PayloadAction<string>) => {
      state.address1 = action.payload;
    },
    editAddress2: (state, action: PayloadAction<string>) => {
      state.address2 = action.payload;
    },
    editMemo: (state, action: PayloadAction<string>) => {
      state.memo = action.payload;
    },
  },
});

// createSlice 로 생성된 액션과 리듀서를 export 해준다.
export const {
  editDNo,
  editName,
  editPNumber,
  editZipcode,
  editAddress1,
  editAddress2,
  editMemo,
} = payUserSlice.actions;
export default payUserSlice.reducer;
