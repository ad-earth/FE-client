import { createSlice } from "@reduxjs/toolkit";
export interface PayProductsType {
  products: {
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
  }[];
  oPrice: number;
}
const initialState = {
  // products//
  products: [
    {
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
    },
  ],
  oPrice: null,
} as PayProductsType;

const payPdtSlice = createSlice({
  name: "payPdtSlice",
  initialState,
  reducers: {
    setPayData: (state, action) => {
      state.products = action.payload;
    },
    setPriceData: (state, action) => {
      state.oPrice = action.payload;
    },
  },
});

export const { setPayData, setPriceData } = payPdtSlice.actions;
export default payPdtSlice.reducer;
