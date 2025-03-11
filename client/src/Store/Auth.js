import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  user: {
    name: 'jhon',
    age: 21,
  },
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
});

export default authSlice.reducer;
export const user = (state) => state.auth.user;
