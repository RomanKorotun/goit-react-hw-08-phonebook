import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

const SetAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (user, thunkApi) => {
    try {
      const response = await axios.post('/users/signup', user);
      SetAuthHeader(response.data.token);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const refresh = createAsyncThunk(
  'auth/refreshing',
  async (_, thunkApi) => {
    const state = thunkApi.getState();
    const persistedToken = state.authKey.token;
    if (persistedToken === null) {
      return thunkApi.rejectWithValue('Unable to fetch user');
    }
    try {
      SetAuthHeader(persistedToken);
      const response = await axios.get('users/current');
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error);
    }
  }
);

export const logout = createAsyncThunk('auth/logout', async (_, thunkApi) => {
  try {
    await axios.post('/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});

export const login = createAsyncThunk('auth/login', async (user, thunkApi) => {
  try {
    const response = await axios.post('/users/login', user);
    SetAuthHeader(response.data.token);
    return response.data;
  } catch (error) {
    return thunkApi.rejectWithValue(error);
  }
});
