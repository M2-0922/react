import { ADD_TO_CART, REMOVE_FROM_CART, CLEAR_CART } from "../actions/cartAction";

const initialState = {
    cart: [],
    total: 0,

};

export default function cartReducer(state = initialState, action) {
    console.log("cartReducer", action);
    switch (action.type) {
        case ADD_TO_CART:
            return {
                total: state.total++,
                cart: [...state.cart, action.payload],
            };
        case REMOVE_FROM_CART:
            return {
                total: state.total--,
                cart: state.cart.filter((item) => item.id !== action.payload.id),
            };
        case CLEAR_CART:
            return {
                total: 0,
                cart: [],
            };
        default:
            return state;
    }
}