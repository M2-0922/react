import axios from "axios";

// actions
const FETCH_DATA = "FETCH_DATA";
const FETCH_CHARACTER_DATA_SUCCESSFULL = "FETCH_CHARACTER_DATA_SUCCESSFULL";
const FETCH_LOCATION_DATA_SUCCESSFULL = "FETCH_LOCATION_DATA_SUCCESSFULL";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
const TOGGLE_CHARACTER_FAVORITE = "TOGGLE_CHARACTER_FAVORITE";
const TOGGLE_LOCATION_FAVORITE = "TOGGLE_LOCATION_FAVORITE";

// action creators
export function fetchData(){
    return {
        type: FETCH_DATA
    }
}

export function fetchCharacterDataSuccess(data){
    return {
        type: FETCH_CHARACTER_DATA_SUCCESSFULL,
        payload: { data } // => {data: data} =>
    }
}

export function fetchLocationDataSuccess(data){
    return {
        type: FETCH_LOCATION_DATA_SUCCESSFULL,
        payload: { data } // => {data: data} =>
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: { error }
    }
}

export function toggleCharacterFavorite(id) {
    return {
        type: TOGGLE_CHARACTER_FAVORITE,
        payload: { id }
    }
}

export function toggleLocationFavorite(id) {
    return {
        type: TOGGLE_LOCATION_FAVORITE,
        payload: { id }
    }
}

// api request functions

export function fetchCharactersData() {
    return async function(dispatch) {
        dispatch(fetchData()); // starting or preparing for request
        await axios.get("https://rickandmortyapi.com/api/character")
            .then(response => {
                dispatch(fetchCharacterDataSuccess(response.data.results))
            })
            .catch((err) => {
                dispatch(fetchDataError(err))
            })
    }
}

export function fetchLocationData() {
    return async function(dispatch) {
        dispatch(fetchData());
        await axios.get("https://rickandmortyapi.com/api/location")
            .then(response => {
                dispatch(fetchLocationDataSuccess(response.data.results));
            })
            .catch((err) => {
                dispatch(fetchDataError(err));
            })
    }
}