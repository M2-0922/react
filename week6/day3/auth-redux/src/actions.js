import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createUser = createAsyncThunk(
    "auth/createUser",
    async (userData) => {
        const response = await axios.post(
            "https://gorest.co.in/public/v2/users",
            userData, // => { name: "", gender: "", email: "", status: "" }
            {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer c8f6db01fe72de403a04d0d2bd5a4f5b57d90890c76e8b973cdb3f44798124c4"
                }
            }
        );
        console.log(response);
        return response.data;
    }
)

export const fetchPosts = createAsyncThunk(
    "post/fetchPost",
    async (id) => {
        const response = await axios.get(
            `https://gorest.co.in/public/v2/users/${id}/posts`,
            {
                headers:{
                    "Content-Type": "application/json",
                    Authorization: "Bearer c8f6db01fe72de403a04d0d2bd5a4f5b57d90890c76e8b973cdb3f44798124c4"
                }
            }
        );

        console.log(response.data);
        return response.data;
    }
)