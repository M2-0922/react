import axios from "axios";

// actions
const FETCH_DATA = "FETCH_DATA";
const FETCH_CHARACTER_DATA_SUCCESSFULL = "FETCH_CHARACTER_DATA_SUCCESSFULL";
const FETCH_LOCATION_DATA_SUCCESSFULL = "FETCH_LOCATION_DATA_SUCCESSFULL";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
const TOGGLE_FAVORITE_CHARACTER = "TOGGLE_FAVORITE_CHARACTER";
const TOGGLE_FAVORITE_LOCATION = "TOGGLE_FAVORITE_LOCATION";

// action creators
export function fetchData() {
    return {
        type: FETCH_DATA
    }
}

export function fetchCharacterDataSuccess(data) {
    return {
        type: FETCH_CHARACTER_DATA_SUCCESSFULL,
        payload: { data } // same as { data: data }
    }
}

export function fetchLocationDataSuccess(data) {
    return {
        type: FETCH_LOCATION_DATA_SUCCESSFULL,
        payload: { data } // same as { data: data }
    }
}

export function fetchDataError(error) {
    return {
        type: FETCH_DATA_ERROR,
        payload: { error }
    }
}

export function toggleFavoriteCharacter(id) {
    return {
        type: TOGGLE_FAVORITE_CHARACTER,
        payload: { id }
    }
}

export function toggleFavoriteLocation(id) {
    return {
        type: TOGGLE_FAVORITE_LOCATION,
        payload: { id }
    }
}

//api repuest functions
export function fetchCharactersData() {
    return async function(dispatch) {
        dispatch(fetchData());
        await axios.get("https://rickandmortyapi.com/api/character")
            .then(res => {
                dispatch(fetchCharacterDataSuccess(res.data.results))
            })
            .catch((err) => {
                dispatch(fetchDataError(err))
            })
    }
}

export function fetchLocationsData() {
    return async function(dispatch) {
        dispatch(fetchData());
        await axios.get("https://rickandmortyapi.com/api/location")
            .then(res => {
                dispatch(fetchLocationDataSuccess(res.data.results))
            })
            .catch((err) => {
                dispatch(fetchDataError(err))
            })
    }
}