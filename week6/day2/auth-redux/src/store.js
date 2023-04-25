import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/authSlice";
import userReducer from "./slices/userSlice";

const store = configureStore({
    reducer: {
        // add all reducers we have
        user: userReducer,
        auth: authReducer
    }
})

export default store;