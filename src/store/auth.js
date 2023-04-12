import { createSlice } from "@reduxjs/toolkit";

const initialAuthenticateState = { isAuthenticated: false };

const authenticateSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticateState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },

    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const authenticateActions = authenticateSlice.actions;
export default authenticateSlice.reducer;
