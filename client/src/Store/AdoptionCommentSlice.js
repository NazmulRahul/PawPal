const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");

const initialState = [
  {
    id: "1",
    body: "I absolutely loved this article! It provided a lot of insights I hadn't considered before.",
    userName: "Jack",
    userId: "1",
    parentId: null,
    createdAt: "2021-08-16T23:00:33.010+02:00",
  },
  {
    id: "2",
    body: "Great post! I think the author made some compelling arguments regarding the current trends.",
    userName: "John",
    userId: "2",
    parentId: null,
    createdAt: "2021-08-16T23:15:45.010+02:00",
  },
];

const addComment = createAsyncThunk("comments/addComment", )

const adoptionCommentSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {},
  extraReducers: builder => {

  }
});
