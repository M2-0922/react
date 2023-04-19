import axios from "axios";
// action types
export const FETCH_PRODUCTS_START = "FETCH_PRODUCTS_START";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";

// action creators

export const fetchProductsStart = () => {
    return {
        type: FETCH_PRODUCTS_START,
    };
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products,
    };
}

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error,
    };
}

// thunk action creator
export const fetchProducts = () => {
    return async (dispatch) => {
        dispatch(fetchProductsStart());
        await axios
            .get("https://fakestoreapi.com/products")
            .then((res) => {
                console.log(res.data);
                dispatch(fetchProductsSuccess(res.data));
            })
            .catch((err) => {
                dispatch(fetchProductsFailure(err));
            });
    };
}
