import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: undefined,
  user: undefined,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userLoggedIn(state, action) {
      state.token = action.payload;
    },
    validateUser: (state, action) => {
      state.user = action.payload;
    },
    userLoggedOut(state) {
      state.token = undefined;
    },
  },
});

export const { userLoggedIn, userLoggedOut, validateUser } = authSlice.actions;
export default authSlice.reducer;
