import { configureStore } from '@reduxjs/toolkit';
import auth from './Auth';
import util from './Utils';
import adoptionPostReducer from './AdoptionPostSlice'
import adoptionCommentReducer from './AdoptionCommentSlice'
import blog from './Blog';

const store = configureStore({
  reducer: {
    auth,
    util,
    adoptionPost: adoptionPostReducer,
    adoptionComment: adoptionCommentReducer,
    blog,
  },
});

export default store;
