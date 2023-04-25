import { createSlice } from "@reduxjs/toolkit";
import { createUser } from "../actions";

const authSlice = createSlice({
    name:"auth",
    initialState: {
        // token: "",
        user: null,
        isLoggedIn: false
    },
    reducers:{
        register: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        login: (state, action) => {
            state.isLoggedIn = true;
            state.user = action.payload;
        },
        logout: (state) => {
            state.isLoggedIn = false;
            state.user = null;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.fulfilled, (state, action) => {
            const { id, name, email, gender, status } = action.payload;

            state.user = { id, name, email, gender, status };
            state.isLoggedIn = true;
        })
    }
});

export const { login, logout, register } = authSlice.actions;
export default authSlice.reducer;