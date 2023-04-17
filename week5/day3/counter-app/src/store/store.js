import { legacy_createStore as createStore } from "redux";
import counterReducer from "../reducers/counterReducer";

const store = createStore(counterReducer);

export default store;