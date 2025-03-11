import { configureStore } from '@reduxjs/toolkit';
import auth from './Auth';
import util from './Utils';

const store = configureStore({
  reducer: {
    auth,
    util,
  },
});

export default store;
