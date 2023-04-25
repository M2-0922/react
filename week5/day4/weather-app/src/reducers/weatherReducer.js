import { ADD_CITY, SET_CITY, SET_WEATHER, FETCH_DATA, FETCH_ERROR } from "../actions/weatherAction";

const initialState = {
    city: "",
    weather: null,
    cities: [],
    isLoading: false,
    error: null
}

function weatherReducer(state = initialState, action){
    console.log("weatherReducer", action);
    switch (action.type) {
        case FETCH_DATA:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case SET_CITY:
            return {
                ...state,
                city: action.payload
            }
        case SET_WEATHER:
            return {
                ...state,
                isLoading: false,
                weather: action.payload
            }
        case ADD_CITY:
            return {
                ...state,
                cities: [...state.cities, action.payload]
            }
        default:
            return state;
    }
}

export default weatherReducer;