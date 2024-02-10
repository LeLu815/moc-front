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
    replaceUserData(state, action) {
      // 여기서 토큰을 왜받음?
      const {
        user,
        token: { accese, refresh },
      } = action.payload;
      state.user = user;
      state.isLoggedIn = Boolean(user);
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
