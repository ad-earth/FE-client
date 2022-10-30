import { createSlice } from "@reduxjs/toolkit";
import { DetailResponseType } from "../../containers/detailPage/details/details.type";

export interface productDataType {
  details: DetailResponseType;
  reviewPage: number;
}

const initialState: productDataType = {
  details: {
    userLike: false,
    k_No: null,
    product: {
      p_No: 0,
      p_Category: "",
      p_Thumbnail: [],
      a_Brand: "",
      p_Name: "",
      p_Cost: 0,
      p_Sale: false,
      p_Discount: 0,
      p_Option: [],
      p_Soldout: false,
      p_Best: false,
      p_New: false,
      p_Cnt: 0,
      p_Content: "",
      p_Desc: "",
      p_Like: 0,
      p_Review: 0,
    },
  },
  reviewPage: 1,
};

const detailSlice = createSlice({
  name: "detailSlice",
  initialState,
  reducers: {
    setDetails: (state, action) => {
      state.details = action.payload;
    },
    setReviewPage: (state, action) => {
      state.reviewPage = action.payload;
    },
  },
});

export const { setDetails, setReviewPage } = detailSlice.actions;
export default detailSlice.reducer;
