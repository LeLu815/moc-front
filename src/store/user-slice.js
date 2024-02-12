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
      state.user = ueserData.user;
      state.isLoggedIn = true;
      console.log("loginUserData :", ueserData.user);
      console.log("state :", state.user);
    },
    logoutUsrData(state, action) {
      state.user = null;
      state.isLoggedIn = false;
    },
    // 토큰은 리액트 쿼리에서 받기!
    replaceUserData(state, action) {
      const { user, isLoggedIn } = action.payload;
      console.log("replaceUserData :", user, isLoggedIn);
      state.user = user;
      state.isLoggedIn = isLoggedIn;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
