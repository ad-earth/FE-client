import { createSlice } from "@reduxjs/toolkit";
import { boolean } from "yup";

export interface productDataType {
  details: {
    userLike: boolean;
    k_No: number;
    product: {
      p_Best: boolean;
      p_No: number;
      p_Category: string;
      p_Thumbnail: string[];
      a_Brand: string;
      p_Name: string;
      p_Cost: number;
      p_Sale: boolean;
      p_Discount: number;
      p_Option: [[string, string, string, number, number]];
      p_Desc: string;
      p_Soldout: boolean;
      p_Review: number;
      p_Like: number;
      p_New: boolean;
    };
  };
}

const initialState: productDataType = {
  details: {
    userLike: false,
    k_No: null,
    product: {
      p_Best: false,
      p_No: null,
      p_Category: null,
      p_Thumbnail: [],
      a_Brand: null,
      p_Name: null,
      p_Cost: 0,
      p_Sale: false,
      p_Discount: 0,
      p_Option: [[null, null, null, null, null]],
      p_Desc: null,
      p_Soldout: false,
      p_Review: 0,
      p_Like: 0,
      p_New: false,
    },
  },
};

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { setDetails } = detailSlice.actions;
export default detailSlice.reducer;
