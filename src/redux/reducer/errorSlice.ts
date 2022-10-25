import { createSlice } from "@reduxjs/toolkit";

export interface errorDataType {
  isError: boolean;
  errorMessage: string;
}

const initialState: errorDataType = {
  isError: false,
  errorMessage: null,
};

const errorSlice = createSlice({
  name: "errorSlice",
  initialState,
  reducers: {
    setIsError: (state, action) => {
      state.isError = action.payload;
    },
    setErrorMessage: (state, action) => {
      state.errorMessage = action.payload;
    },
  },
});

export const { setIsError, setErrorMessage } = errorSlice.actions;
export default errorSlice.reducer;
