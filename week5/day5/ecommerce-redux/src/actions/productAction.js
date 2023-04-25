import axios from "axios";
// action types
export const FETCH_PRODUCT_START = "FETCH_PRODUCT_START";
export const FETCH_PRODUCT_FAILURE = "FETCH_PRODUCT_FAILURE";
export const FETCH_PRODUCT_SUCCESS = "FETCH_PRODUCT_SUCCESS";

// action creators

export const fetchProductStart = () => ({
    type: FETCH_PRODUCT_START
})

export const fetchProductSuccess = (data) => ({
    type: FETCH_PRODUCT_SUCCESS,
    payload: data
})

export const fetchProductFailure = (data) => ({
    type: FETCH_PRODUCT_FAILURE,
    payload: data
})

// async function

export const fetchProduct = () => {
    return async (dispatch) => {
        dispatch(fetchProductStart());
        await axios.get("https://fakestoreapi.com/products")
            .then(response => {
                dispatch(fetchProductSuccess(response.data));
                console.log(response.data);
            })
            .catch(err => {
                dispatch(fetchProductFailure(err.message))
            })
    }
}
