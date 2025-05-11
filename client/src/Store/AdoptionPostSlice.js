import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const GET_ALL_URL = "http://15.235.163.93:5000/adoption/api/getAllPosts";
const POST_URL = "http://15.235.163.93:5000/adoption/api/createPost";

const initialState = {
  posts: [],
  isLoading: false,
  status: 'idle'
};


export const getAllPosts = createAsyncThunk(
  'adoptionPostSlice/getAllPosts',
  async () => {
    try {
      const response = await axios.get(GET_ALL_URL, {})
      return response.data;
    } catch (error) {
      return error      
    }
  }
)

export const createPost = createAsyncThunk(
  'adoptionPostSlice/createPost',
  async (formBody) => {
    try{
      const response = await axios.post(POST_URL, formBody)
      return response.data;
    } catch(error) {
      return error
    }
  }
)

const adoptionPostSlice = createSlice({
  name: "post",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
    .addCase(createPost.pending, (state, action) => {
      state.isLoading = true
      state.status = 'pending'
    })
    .addCase(createPost.fulfilled, (state, action) => {
      state.isLoading = false;
      state.status = 'fulfilled';
    })
    .addCase(createPost.rejected, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected';
    })
    .addCase(getAllPosts.pending, (state,action) => {
      state.isLoading = true;
      state.status = 'pending'
    })
    .addCase(getAllPosts.fulfilled, (state,action) => {
      state.isLoading = false;
      state.status = 'fulfilled'
      state.posts = action.payload?.posts
    })
    .addCase(getAllPosts.rejected, (state, action) => {
      state.isLoading = false;
      state.status = 'rejected'
    })
  },
});

export const selectAllPosts = (state) => state.adoptionPost.posts;
export const getLoadingState = (state) => state.adoptionPost.isLoading;
export const getStatus = (state) => state.adoptionPost.status;

export default adoptionPostSlice.reducer;
