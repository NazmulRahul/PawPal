import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blogFeatured: {},
  blogs: [],
  blogTabIndex: 6,
};

const blogSlice = createSlice({
  name: 'blog',
  initialState,
  reducers: {
    saveBlog(state, action) {
      console.log(action.payload);
      state.blogs.push(action.payload);
    },
    setBlogTabIndex(state, action) {
      state.blogTabIndex = action.payload;
    },
  },
});

export default blogSlice.reducer;
export const { saveBlog, setBlogTabIndex } = blogSlice.actions;
export const blogs = (state) => state.blog.blogs;
export const blogTabIndex = (state) => state.blog.blogTabIndex;
