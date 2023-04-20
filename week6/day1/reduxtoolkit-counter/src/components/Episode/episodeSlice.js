// https://rickandmortyapi.com/api/episode
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchEpisode = createAsyncThunk("episode/fetchEpisode", async () => {
    const response = await axios.get("https://rickandmortyapi.com/api/episod");
    return response.data.results;
})

const episodeSlice = createSlice({
    name: "episode",
    initialState: {
        list:[],
        status: "idle",
        error: null
    },
    reducers:{},
    extraReducers: (builder) => {
        builder
        .addCase(fetchEpisode.pending, (state) => {
            state.status = "loading";
        })
        .addCase(fetchEpisode.fulfilled, (state, action) => {
            state.status = "succeeded";
            state.list = action.payload;
        })
        .addCase(fetchEpisode.rejected, (state, action) => {
            state.status = "rejected";
            state.error = action.error.message;
        })
    }
})

export default episodeSlice.reducer;