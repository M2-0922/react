import axios from 'axios';

// action types
export const SET_CITY = "SET_CITY";
export const SET_WEATHER = "SET_WEATHER";
export const ADD_CITY = "ADD_CITY";
export const FETCH_DATA = "FETCH_DATA";
export const FETCH_ERROR = "FETCH_ERROR";

// action creators
export const setCity = (city) => ({
  type: SET_CITY,
  payload: city,
});

export const setWeather = (weather) => ({
  type: SET_WEATHER,
  payload: weather,
});

export const addCity = (city) => ({
  type: ADD_CITY,
  payload: city,
});

// async functions
export const fetchWeather = (city) => {
  return async (dispatch) => {
    dispatch({ type: FETCH_DATA })
    await axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=2148138c9d69fd4f6cc12ba5f3a0d85b`
      )
      .then((data) => {
        dispatch(setWeather(data.data))
        console.log(data.data);
      })
      .catch((err) => {
        dispatch({ type: FETCH_ERROR})
        console.log(err);
      });
  };
};
