import { legacy_createStore as createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk"
import productReducer from "./reducers/productReducer";
import cartReducer from "./reducers/cartReducer";

const rootReducer = combineReducers({
    cart: cartReducer,
    product: productReducer
})

const store = createStore(
    // reducers,
    rootReducer,
    applyMiddleware(thunk)
)

export default store;