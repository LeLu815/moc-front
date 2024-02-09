import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    isLoggedIn: false,
    user: null,
  },
  reducers: {
    updateUserData(state, action) {
      const ueserData = action.payload;
    },
  },
});

export const userAction = userSlice.actions;
export default userSlice;
