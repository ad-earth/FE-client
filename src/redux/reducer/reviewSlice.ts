import { createSlice } from "@reduxjs/toolkit";

export interface ProductType {
  review: {
    p_No: number | null;
    p_Thumbnail: string[];
    a_Brand: string;
    p_Name: string;
    p_Option: Array<
      [
        string | null,
        string | null,
        number | null,
        number | null,
        number | null
      ]
    > | null;
  };
}

const initialState: ProductType = {
  review: {
    p_No: null,
    p_Thumbnail: [""],
    a_Brand: "",
    p_Name: "",
    p_Option: [null, null, null, null, null],
  },
};

const reviewSlice = createSlice({
  name: "reviewSlice",
  initialState,
  reducers: {
    setReviewData: (state, action) => {
      state.review = action.payload;
    },
  },
});

export const { setReviewData } = reviewSlice.actions;
export default reviewSlice.reducer;
