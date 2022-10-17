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
  kNo: number;
}
interface ProductState {
  pNo: number;
  pThumbnail: string;
  pCategory: string;
  aBrand: string;
  pName: string;
  pCost: number;
  pSale: boolean;
  pDiscount: number;
  pOption: [string | null, string | null, string | null, number, number][];
  pPrice: number;
  pCnt: number;
}

const initialState = {
  dNo: "null",
  name: "",
  pNumber: "",
  zipcode: "",
  address1: "",
  address2: "",
  memo: "배송 메모가 없습니다",
  products: null,
  //주석 다음 커밋때 해결할게요
  // kNo: null,
  // pNo: 0,
  // pThumbnail: "",
  // pCategory: "",
  // aBrand: "",
  // pName: "",
  // pCost: 0,
  // pSale: null,
  // pDiscount: 0,
  // pOption: [null],
  // pPrice: 0,
  // pCnt: 0,
} as PaymentState;

const paymentSlice = createSlice({
  name: "paymentReducer",
  initialState,
  reducers: {
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
    editKNo: (state, action: PayloadAction<number>) => {
      state.kNo = action.payload;
    },
    //주석 다음 커밋때 해결할게요
    // editPNo: (state, action: PayloadAction<number>) => {
    //   state.pNo = action.payload;
    // },
    // editPThumbnail: (state, action: PayloadAction<string>) => {
    //   state.pThumbnail = action.payload;
    // },
    //  editPCategory: (state, action: PayloadAction<string>) => {
    //   state.pCategory = action.payload;
    // },
    //  editaBrand: (state, action: PayloadAction<string>) => {
    //   state.aBrand = action.payload;
    // },
    //  editpName: (state, action: PayloadAction<string>) => {
    //   state.pName = action.payload;
    // },
    //  editpCost: (state, action: PayloadAction<number>) => {
    //   state.pCost = action.payload;
    // },
    editproducts: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
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
  editproducts,
} = paymentSlice.actions;
export default paymentSlice.reducer;
