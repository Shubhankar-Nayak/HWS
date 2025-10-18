import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

interface User {
  id: string;
  email: string;
  name: string;
  hasPassword?: boolean;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

const initialState: AuthState = {
  user: null,
  isAuthenticated: false,
  loading: false,
};

const API = import.meta.env.VITE_API_URL;

export const setPassword = createAsyncThunk<
  void,
  { newPassword: string }
>('auth/setPassword', async ({ newPassword }, { rejectWithValue }) => {
  try {
    await axios.post(
      `${API}/user/set-password`,
      { newPassword },
      { withCredentials: true } // <-- send cookies automatically
    );
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to set password');
  }
});

export const changePassword = createAsyncThunk<
  void,
  { currentPassword: string; newPassword: string }
>('auth/changePassword', async ({ currentPassword, newPassword }, { rejectWithValue }) => {
  try {
    await axios.post(
      `${API}/user/change-password`,
      { currentPassword, newPassword },
      { withCredentials: true } // <-- send cookies automatically
    );
  } catch (error: any) {
    return rejectWithValue(error.response?.data?.message || 'Failed to change password');
  }
});

export const verifyUser = createAsyncThunk(
  'auth/verifyUser',
  async (_, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${API}/user/verify`, { withCredentials: true });
      return res.data.user;
    } catch (error: any) {
      return rejectWithValue('Not authenticated');
    }
  }
);


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
    },
    loginSuccess: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
    loginFailure: (state) => {
      state.loading = false;
      state.user = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
    },
    register: (state, action: PayloadAction<{ user: User }>) => {
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.loading = false;
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, logout, register } = authSlice.actions;
export default authSlice.reducer;