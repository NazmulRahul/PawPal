import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const makeTransport = createAsyncThunk(
  'transport/makeTransport',
  async (formData, thunkAPI) => {
    try {
      console.log('inside makeTransport');
      const response = await axios.post(
        'http://localhost:3000/api/transport/',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      console.log(response.data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

const initialState = {
  isLoading: false,
  transportForm: {
    owner: null,
    pet: null,
    travel: null,
    document: null,
    agency: null,
  },
};

const transportSlice = createSlice({
  name: 'transport',
  initialState,
  reducers: {
    setTransportFrom(state, action) {
      const { data, section } = action.payload;
      state.transportForm[section] = { ...data };
    },
  },
  extraReducers(builder) {
    builder
      .addCase(makeTransport.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(makeTransport.fulfilled, (state, action) => {
        state.isLoading = false;
      })
      .addCase(makeTransport.rejected, (state, action) => {
        state.isLoading = false;
      });
  },
});

export default transportSlice.reducer;
export const { setTransportFrom } = transportSlice.actions;

export const transportForm = (state) => state.transport.transportForm;
export const transportIsLoading = (state) => state.transport.isLoading;
