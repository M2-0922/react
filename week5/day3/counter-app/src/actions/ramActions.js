import axios from "axios";

// actions
const FETCH_DATA = "FETCH_DATA";
const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
const FETCH_DATA_ERROR = "FETCH_DATA_ERROR";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

// action creators
export function toggleFavorite(id) {
  return {
    type: TOGGLE_FAVORITE,
    payload: { id: id },
  };
}

export function fetchCharacterDataSuccess(data) {
  return {
    type: FETCH_DATA_SUCCESS,
    payload: { data: data },
  };
}

export function fetchCharacterDataError(error) {
  return {
    type: FETCH_DATA_ERROR,
    payload: { error: error },
  };
}

export function fetchCharacterData() {
  return {
    type: FETCH_DATA,
  };
}

// async api call
export function fetchCharacterDataAsync() {
  return async function (dispatch) {
    dispatch(fetchCharacterData());
    await axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        dispatch(fetchCharacterDataSuccess(response.data.results));
      })
      .catch((error) => {
        dispatch(fetchCharacterDataError(error));
      });
  };
}
