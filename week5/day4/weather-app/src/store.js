import { legacy_createStore as createStore, applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk"
import weatherReducer from "./reducers/weatherReducer";

const store = createStore(
    weatherReducer,
    applyMiddleware(thunk)
)

export default store;