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
    },
    logoutUsrData(state, action) {
      state.user = null;
      state.isLoggedIn = false;
    },
    // 토큰은 리액트 쿼리에서 받기!
    replaceUserData(state, action) {
      const { user, isLoggedIn } = action.payload;
      state.user = user;
      state.isLoggedIn = isLoggedIn;
    },
    // replaceToken(state, action) {
    //   const { token } = action.payload;
    //   state.token = token;
    // },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
