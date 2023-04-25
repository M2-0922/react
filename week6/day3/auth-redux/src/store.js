import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import postReducer from "./slices/postSlice";
const store = configureStore({
    reducer: {
        // add all reducers we have
        auth: authReducer,
        post: postReducer
    }
})

export default store;