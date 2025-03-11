import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isNavBgWhite: false,
  scrollY: 0,
};

const utilSlice = createSlice({
  name: 'util',
  initialState,
  reducers: {
    setScrollY(state, action) {
      state.scrollY = action.payload;
    },
    setIsNavBgWhite(state, action) {
      state.isNavBgWhite = action.payload;
    },
  },
});

export default utilSlice.reducer;
export const { setScrollY, setIsNavBgWhite } = utilSlice.actions;
export const isNavBgWhite = (state) => state.util.isNavBgWhite;
export const scrollY = (state) => state.util.scrollY;
