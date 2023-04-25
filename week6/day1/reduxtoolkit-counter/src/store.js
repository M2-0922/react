import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./components/Counter/counterSlice";
import episodeSlice from "./components/Episode/episodeSlice";

const store = configureStore({
    reducer: {
        counter: counterSlice,
        episode: episodeSlice
        // we will add reducers here.
    }
});

export default store;
