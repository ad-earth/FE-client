import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface PaymentState {
  products: ProductState[];
  dNo?: string;
  name: string;
  pNumber: string;
  zipcode: string;
  address1: string;
  address2: string;
  memo: string;
}
export interface ProductState {
  kNo: number;
  pNo: number;
  pThumbnail: string;
  pCategory: string;
  aBrand: string;
  pName: string;
  pCost: number;
  pDiscount: number;
  pSale: boolean;
  pOption: [string | null, string | null, string | null, number, number][];
  pPrice: number;
  pCnt: number;
  oPrice: number;
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
  // products//
  kNo: null,
  pNo: 0,
  pThumbnail: "",
  pCategory: "",
  aBrand: "",
  pName: "",
  pCost: 0,
  pDiscount: 0,
  pSale: null,
  pOption: [null],
  pPrice: 0,
  pCnt: 0,
  oPrice: null,
} as PaymentState & ProductState;

const paymentSlice = createSlice({
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

    //products//
    editKNo: (state, action: PayloadAction<number>) => {
      state.kNo = action.payload;
    },
    editPNo: (state, action: PayloadAction<number>) => {
      state.pNo = action.payload;
    },
    editPThumbnail: (state, action: PayloadAction<string>) => {
      state.pThumbnail = action.payload;
    },
    editPCategory: (state, action: PayloadAction<string>) => {
      state.pCategory = action.payload;
    },
    editABrand: (state, action: PayloadAction<string>) => {
      state.aBrand = action.payload;
    },
    editPName: (state, action: PayloadAction<string>) => {
      state.pName = action.payload;
    },
    editPCost: (state, action: PayloadAction<number>) => {
      state.pCost = action.payload;
    },
    editPDiscount: (state, action: PayloadAction<number>) => {
      state.pDiscount = action.payload;
    },
    editPSale: (state, action: PayloadAction<boolean>) => {
      state.pSale = action.payload;
    },
    editPOption: (
      state,
      action: PayloadAction<
        [string | null, string | null, string | null, number, number][]
      >
    ) => {
      state.pOption = action.payload;
    },
    editPPrice: (state, action: PayloadAction<number>) => {
      state.pPrice = action.payload;
    },
    editPCnt: (state, action: PayloadAction<number>) => {
      state.pCnt = action.payload;
    },
    editOPrice: (state, action: PayloadAction<number>) => {
      state.oPrice = action.payload;
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
  editKNo,
  editPNo,
  editPThumbnail,
  editPCategory,
  editABrand,
  editPName,
  editPCost,
  editOPrice,
  editPDiscount,
  editPSale,
  editPOption,
  editPPrice,
  editPCnt,
} = paymentSlice.actions;
export default paymentSlice.reducer;
