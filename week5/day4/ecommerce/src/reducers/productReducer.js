import { FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_START, FETCH_PRODUCTS_SUCCESS } from "../actions/productActions";

const initialState = {
    products: [],
    isLoading: false,
    error: null,
};

export default function productReducer(state = initialState, action) {
    console.log("productReducer", action);
    switch (action.type) {
        case FETCH_PRODUCTS_START:
            return {
                ...state,
                isLoading: true,
            };
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload,
            };
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload,
            };
        default:
            return state;
    }
}
