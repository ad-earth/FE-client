import { createSlice } from "@reduxjs/toolkit";

export interface UserDataType {
  userData: {
    token: string;
    u_Idx: string;
    u_Id: string;
    u_Address1: string;
    u_Address2: string;
    u_Address3: string;
    u_Gender: string;
    u_Img: string;
    u_Name: string;
    u_Phone: string;
  };
}

const initialState: UserDataType = {
  userData: {
    token: "",
    u_Idx: "",
    u_Id: "",
    u_Address1: "",
    u_Address2: "",
    u_Address3: "",
    u_Gender: "",
    u_Img: "",
    u_Name: "",
    u_Phone: "",
  },
};

const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.userData = action.payload;
    },
  },
});

export const { setUserData } = userSlice.actions;
export default userSlice.reducer;
