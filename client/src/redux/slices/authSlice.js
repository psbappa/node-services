import { createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'auth',
  initialState: { isLoggedIn: false },
  reducers: {
    toggleAuth: (state) => {
      state.isLoggedIn = !state.isLoggedIn;
    }
  }
});

export const { toggleAuth } = authSlice.actions;
export default authSlice.reducer;
