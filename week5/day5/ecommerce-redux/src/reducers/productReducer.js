import { FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILURE } from "../actions/productAction";

const initialState = {
    products: [],
    isLoading: false,
    isError: null
}

export default function productReducer(state = initialState, action){
    console.log("productReducer", action);
    switch (action.type) {
        case FETCH_PRODUCT_START:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                ...state,
                isLoading: false,
                isError: action.payload
            }
        default:
            return state;
    }
}