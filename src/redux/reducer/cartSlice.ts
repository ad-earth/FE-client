import { createSlice } from "@reduxjs/toolkit";

export interface CartDataType {
  cartData: {
    id: number;
    keywordNo: number;
    prodNo: string;
    thumbnail: string;
    category: string;
    brand: string;
    name: string;
    price: number;
    discount: number;
    option: Array<string | number | null>[];
    totalPrice: number;
    totalCnt: number;
  }[];
  checkedItems: number[];
  orderData: {
    id: number;
    keywordNo: number;
    prodNo: string;
    thumbnail: string;
    category: string;
    brand: string;
    name: string;
    price: number;
    discount: number;
    option: [string | null, string | null, number | null, number, number][];
    totalPrice: number;
    totalCnt: number;
  }[];
}

const initialState: CartDataType = {
  cartData: [
    {
      id: 0,
      keywordNo: 0,
      prodNo: "",
      thumbnail: "",
      category: "",
      brand: "",
      name: "",
      price: 0,
      discount: 0,
      option: [],
      totalPrice: 0,
      totalCnt: 0,
    },
  ],
  checkedItems: [],
  orderData: [
    {
      id: 1665330347274,
      keywordNo: 0,
      prodNo: "1665330347274",
      thumbnail:
        "https://adearth-bucket.s3.ap-northeast-2.amazonaws.com/THUMBNAIL/bath1-1.jpeg",
      category: "욕실",
      brand: "노플라스틱선데이",
      name: "튜브짜개",
      price: 4000,
      discount: 0,
      option: [["아이보리", "대", 0, 1, 3000]],
      totalPrice: 3000,
      totalCnt: 1,
    },
  ],
};

const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setCartData: (state, action) => {
      state.cartData = action.payload;
    },
    setCheckedItems: (state, action) => {
      state.checkedItems = action.payload;
    },
    setOrderData: (state, action) => {
      state.orderData = action.payload;
    },
  },
});

export const { setCartData, setCheckedItems, setOrderData } = cartSlice.actions;
export default cartSlice.reducer;
