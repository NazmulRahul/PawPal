// import axios from '../Utils/axios';
import axios from 'axios';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const login = createAsyncThunk('auth/login', async (data, thunkAPI) => {
  try {
    const response = await axios.post(
      'https://www.pawpalbd.com/api/user/api/login',
      data
    );
    console.log(response);
    return response.data;
  } catch (error) {
    return thunkAPI.rejectWithValue(
      error.response?.data || { message: 'Login failed' }
    );
  }
});

export const register = createAsyncThunk(
  'auth/register',
  async (data, thunkAPI) => {
    try {
      const response = await axios.post(
        'https://www.pawpalbd.com/api/user/api/create',
        data
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error.response?.data || { message: 'SignUp failed' }
      );
    }
  }
);

const initialState = {
  user: JSON.parse(localStorage.getItem('user')) || null,
  authStatus: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setAuthStatus(state, action) {
      state.authStatus = action.payload;
    },
  },

  extraReducers(builder) {
    builder
      .addCase(register.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(register.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.authStatus = true;

        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.isLoading = false;
      })
      .addCase(register.rejected, (state, action) => {
        console.log(action.payload);
        const { error, message } = action.payload;
        state.isLoading = false;
        alert(error || message || action.payload);
      })
      .addCase(login.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        console.log(action.payload);
        state.isLoading = false;
        alert(action.payload.error || action.payload);
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log(action.payload);
        state.user = action.payload;
        state.authStatus = true;

        localStorage.removeItem('user');
        localStorage.setItem('user', JSON.stringify(action.payload));
        state.isLoading = false;
      });
  },
});

export default authSlice.reducer;
export const { setToken, setUser, setAuthStatus } = authSlice.actions;
export const user = (state) => state.auth.user;
export const authStatus = (state) => state.auth.authStatus;
export const authIsLoading = (state) => state.auth.isLoading;
