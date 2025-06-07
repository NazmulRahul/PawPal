import { createSlice } from '@reduxjs/toolkit';

const initialState = {
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
});

export default transportSlice.reducer;
export const { setTransportFrom } = transportSlice.actions;

export const transportForm = (state) => state.transport.transportForm;
