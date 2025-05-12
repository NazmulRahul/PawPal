import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  blog: null,
  featuredBlogs: null,
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
    setBlog(state, action) {
      state.blog = action.payload;
    },
  },
});

export default blogSlice.reducer;
export const { saveBlog, setBlogTabIndex, setBlog } = blogSlice.actions;
export const blogs = (state) => state.blog.blogs;
export const blog = (state) => state.blog.blog;
export const featuredBlogs = (state) => state.blog.featuredBlogs;
export const blogTabIndex = (state) => state.blog.blogTabIndex;
