import { configureStore } from '@reduxjs/toolkit';
import auth from './Auth';
import util from './Utils';
import blog from './Blog';

const store = configureStore({
  reducer: {
    auth,
    util,
    blog,
  },
});

export default store;
