import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = "https://www.pawpalbd.com/api/adoption/api/"

const initialState = {
  posts: [],
  singlePost: null,
  isLoading: false,
  status: "idle",
};

export const getAllPosts = createAsyncThunk(
  "adoptionPostSlice/getAllPosts",
  async () => {
    try {
      const response = await axios.get(BASE_URL+'getAllPosts', {withCredentials:true});
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const createPost = createAsyncThunk(
  "adoptionPostSlice/createPost",
  async (formBody) => {
    try {
      const response = await axios.post(BASE_URL+'createPost', formBody, {withCredentials: true});
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const getPetDetailsWithId = createAsyncThunk(
  "adoptionPostSlice/getPetDetailsWithId",
  async (id) => {
    try {
      const response = await axios.get(
        BASE_URL+`getPostWithId/${id}`, {withCredentials:true}
      );
      return response.data;
    } catch (error) {
      return error;
    }
  }
);

export const deletePost = createAsyncThunk(
  "adoptionPostSlice/deletePost", 
  async (id, thunkAPI) => {
    try {
      const response = await axios.delete(
        BASE_URL+`deletePost/${id}`, {withCredentials: true}
      )
      return response.data
    } catch (error) {
      const errMessage = error.response?.data?.message || "Failed to delete post.";
      return thunkAPI.rejectWithValue({ message: errMessage });
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
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(createPost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "fulfilled";
      })
      .addCase(createPost.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "rejected";
      })
      .addCase(getAllPosts.pending, (state, action) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(getAllPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "fulfilled";
        state.posts = action.payload?.posts;
      })
      .addCase(getAllPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "rejected";
      })
      .addCase(getPetDetailsWithId.pending, (state, action) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(getPetDetailsWithId.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "fulfilled";
        state.singlePost = action.payload.post
      })
      .addCase(getPetDetailsWithId.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "rejected";
      })
      .addCase(deletePost.pending, (state, action) => {
        state.isLoading = true;
        state.status = "pending";
      })
      .addCase(deletePost.fulfilled, (state, action) => {
        state.isLoading = false;
        state.status = "fulfilled";
        state.singlePost = action.payload.post
      })
      .addCase(deletePost.rejected, (state, action) => {
        state.isLoading = false;
        state.status = "rejected";
      });
  },
});

export const selectAllPosts = (state) => state.adoptionPost.posts;
export const getLoadingState = (state) => state.adoptionPost.isLoading;
export const getStatus = (state) => state.adoptionPost.status;
export const getSinglePost = state => state.adoptionPost.singlePost;

export default adoptionPostSlice.reducer;
