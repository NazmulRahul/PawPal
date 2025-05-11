import { configureStore } from '@reduxjs/toolkit';
import auth from './Auth';
import util from './Utils';
import adoptionPostReducer from './AdoptionPostSlice'

const store = configureStore({
  reducer: {
    auth,
    util,
    adoptionPost: adoptionPostReducer
  },
});

export default store;
