import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    loginUserData(state, action) {
      const ueserData = action.payload;
      state.user = ueserData;
      state.isLoggedIn = true;
    },
    logoutUsrData(state, action) {
      state.user = null;
      state.isLoggedIn = false;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
