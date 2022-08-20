import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from '../../utils/notifications';
import * as userApi from '../../services/userApi';

export const register = createAsyncThunk(
  'users/register',
  async (user, { rejectWithValue }) => {
    try {
      const result = await userApi.register(user);
      Notify.success('You have successfully registered!');
      return result;
    } catch (error) {
      Notify.error('Incorrect information or problem with server');
      return rejectWithValue(error.message);
    }
  },
);

export const login = createAsyncThunk(
  'users/login',
  async (user, { rejectWithValue }) => {
    try {
      const result = await userApi.login(user);
      Notify.success(
        "Login successful!\n",
        `Welcome back, ${result.user.name} !`,
        3000
      );
      return result;
    } catch (error) {
      Notify.error('Incorrect email or password');
      return rejectWithValue(error.message);
    }
  },
);

export const currentUser = createAsyncThunk(
  'users/currentUser',
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const token = state.auth.token;
    if (!token) return rejectWithValue('Token Error');
   
    try {
      const result = await userApi.currentUser(token);
     return result;
    } catch (error) {
      return  rejectWithValue(error.message);
    }
  },
);

export const logout = createAsyncThunk(
  'users/logout',
  async (_, { rejectWithValue }) => {
    try {
      await userApi.logout();
      Notify.info('You have been logged out!');
    } catch (error) {
      rejectWithValue(error.message);
    }
  },
);