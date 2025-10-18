import axios from 'axios';
import { loginSuccess, logout } from '../store/slices/authSlice';

const API = import.meta.env.VITE_API_URL;

export const fetchCurrentUser = async (dispatch: any) => {
  try {
    const res = await axios.get(`${API}/auth/me`, { withCredentials: true });
    dispatch(loginSuccess({ user: res.data.user }));
  } catch (err) {
    dispatch(logout());
  }
};
