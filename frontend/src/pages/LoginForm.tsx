import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useAppDispatch, useAppSelector } from '../hooks/useAppSelector';
import { loginStart, loginSuccess, loginFailure } from '../store/slices/authSlice';
import { Eye, EyeOff, Mail, Lock, TrendingUp } from 'lucide-react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';

declare global {
  interface Window {
    google: any;
  }
}

interface LoginFormData {
  email: string;
  password: string;
}

interface LoginFormProps {
  onSwitchToRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister }) => {
  const API = import.meta.env.VITE_API_URL;
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useAppDispatch();
  const { loading } = useAppSelector(state => state.auth);

  const { register, handleSubmit, formState: { errors } } = useForm<LoginFormData>();

  const onSubmit = async (data: LoginFormData) => {
    try {
      dispatch(loginStart());

      // Include credentials to send cookie automatically
      const response = await axios.post(`${API}/auth/login`, data, { withCredentials: true });

      const { user } = response.data; // backend only returns user, not token

      dispatch(loginSuccess({ user })); // update store with user only
    } catch (error: any) {
      console.error('Login failed:', error);
      dispatch(loginFailure());
    }
  };

  useEffect(() => {
    const initializeUser = async () => {
      try {
        const res = await axios.get(`${API}/auth/me`, { withCredentials: true });
        dispatch(loginSuccess({ user: res.data }));
      } catch {
        console.log("not logged in");
      }
    };
    initializeUser();
  }, [dispatch]);


  useEffect(() => {
    if (window.google) {
      window.google.accounts.id.initialize({
        client_id: import.meta.env.VITE_GOOGLE_CLIENT_ID,
        callback: async (response: any) => {
          try {
            dispatch(loginStart());

            const res = await axios.post(`${API}/auth/google`, 
              { credential: response.credential },
              { withCredentials: true } // send cookie automatically
            );

            const { _id, name, email } = res.data;
            const user = { id: _id, name, email };

            dispatch(loginSuccess({ user }));
          } catch (err) {
            console.error('Google login failed', err);
            dispatch(loginFailure());
          }
        }
      });

      window.google.accounts.id.renderButton(
        document.getElementById('google-signin-btn')!,
        {
          size: 'large',
          shape: 'pill',
          text: 'continue_with',
        }
      );
    }
  }, [dispatch]);

  return (
    <div className="min-h-screen flex items-center justify-center py-8 md:py-10 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-6 md:space-y-8">
        <div className="text-center">
          <div className="mx-auto w-14 h-14 md:w-16 md:h-16 bg-blue-600 rounded-2xl flex items-center justify-center mb-3 md:mb-4">
            <TrendingUp className="w-8 h-8 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-900">
            Welcome back
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to your account to continue
          </p>
        </div>

        <div id="google-signin-btn" className="flex justify-center" />

        <div className="flex items-center justify-center space-x-4 my-4">
          <hr className="w-1/4 border-gray-300" />
          <span className="text-sm text-gray-600">OR</span>
          <hr className="w-1/4 border-gray-300" />
        </div>

        <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <div className="space-y-4">
            <div>
              <label htmlFor="email" className="sr-only">Email address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('email', { 
                    required: 'Email is required',
                    pattern: { value: /^\S+@\S+$/i, message: 'Invalid email address' }
                  })}
                  type="email"
                  className={`
                    appearance-none relative block w-full pl-10 pr-3 py-3 border rounded-lg
                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white border-gray-300 text-gray-900
                    ${errors.email ? 'border-red-500' : ''}
                  `}
                  placeholder="Email address"
                />
              </div>
              {errors.email && (
                <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
              )}
            </div>

            <div>
              <label htmlFor="password" className="sr-only">Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  {...register('password', { required: 'Password is required' })}
                  type={showPassword ? 'text' : 'password'}
                  className={`
                    appearance-none relative block w-full pl-10 pr-10 py-3 border rounded-lg
                    placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                    bg-white border-gray-300 text-gray-900
                    ${errors.password ? 'border-red-500' : ''}
                  `}
                  placeholder="Password"
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5 text-gray-400" />
                  ) : (
                    <Eye className="h-5 w-5 text-gray-400" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>
              )}
            </div>
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
            >
              {loading ? 'Signing in...' : 'Sign in'}
            </button>
          </div>

          <div className="text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <button
                type="button"
                onClick={onSwitchToRegister}
                className="font-medium text-blue-600 hover:text-blue-500 transition-colors duration-200"
              >
                Sign up
              </button>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;