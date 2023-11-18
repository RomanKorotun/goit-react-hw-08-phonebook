import { createSlice } from '@reduxjs/toolkit';
import { logout, refresh, register, login } from './operations';

const AuthSlice = createSlice({
  name: 'auth',
  initialState: {
    user: { name: null, email: null },
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
    isLoadingRegister: false,
    isLoadingLogin: false,
    isLoadingLogout: false,
    errorRegister: false,
    errorLogin: false,
    errorLogout: false,
  },
  extraReducers: builder =>
    builder
      .addCase(register.pending, state => {
        state.errorRegister = false;
        state.isLoadingRegister = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoadingRegister = false;
      })
      .addCase(register.rejected, state => {
        state.errorRegister = true;
        state.isLoadingRegister = false;
      })
      .addCase(refresh.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refresh.fulfilled, (state, action) => {
        state.isRefreshing = false;
        state.isLoggedIn = true;
        state.user = action.payload;
      })
      .addCase(refresh.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(logout.pending, state => {
        state.errorLogout = false;
        state.isLoadingLogout = true;
      })
      .addCase(logout.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
        state.isLoadingLogout = false;
      })
      .addCase(logout.rejected, state => {
        state.errorLogout = true;
        state.isLoadingLogout = false;
      })
      .addCase(login.pending, state => {
        state.errorLogin = false;
        state.isLoadingLogin = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isLoadingLogin = false;
      })
      .addCase(login.rejected, state => {
        state.errorLogin = true;
        state.isLoadingLogin = false;
      }),
});

export const authReducer = AuthSlice.reducer;
