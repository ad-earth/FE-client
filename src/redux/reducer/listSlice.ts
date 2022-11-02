import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ListSliceType {
  sort: string;
  pageNo: number;
}
const initialState = {
  sort: "recent",
  pageNo: 1,
} as ListSliceType;

const ListSlice = createSlice({
  name: "ListReducer",
  initialState,
  reducers: {
    editSort: (state, action: PayloadAction<string>) => {
      state.sort = action.payload;
    },
    editPagNo: (state, action: PayloadAction<number>) => {
      state.pageNo = action.payload;
    },
  },
});

// createSlice 로 생성된 액션과 리듀서를 export 해준다.
export const { editSort, editPagNo } = ListSlice.actions;
export default ListSlice.reducer;
