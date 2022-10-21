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
    option: Array<string | number | null>[];
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
