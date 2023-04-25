import { configureStore } from "@reduxjs/toolkit";

const initialState = {
    characters: [],
    locations:[],
    episodes: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_CHARACTER":
            return { ...state, characters: action.payload };
        case "SET_LOCATION":
            return { ...state, locations: action.payload };
        case "SET_EPISODE":
            return { ...state, episodes: action.payload };
        default:
            return state;
    }
};

const store = configureStore({
    reducer
});

export default store;