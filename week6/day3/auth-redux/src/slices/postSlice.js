import { createSlice } from "@reduxjs/toolkit";
import { fetchPosts } from "../actions";

const postSlice = createSlice({
    name:"post",
    initialState: {
        posts: [],
        isLoading: false,
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder.addCase(fetchPosts.fulfilled, (state, action) => {
            state.posts = action.payload
            state.isLoading = false
        })
        .addCase(fetchPosts.pending, (state) => {
            state.isLoading = true
        })
        .addCase(fetchPosts.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload.error;
        })
    }
});

// export const { login, logout, register } = postSlice.actions;
export default postSlice.reducer;