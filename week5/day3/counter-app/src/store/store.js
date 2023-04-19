import { legacy_createStore as createStore, combineReducers, applyMiddleware } from "redux";
import counterReducer from "../reducers/counterReducer";
import ramReducer from "../reducers/ramReducer";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
	count: counterReducer,
	ram: ramReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

store.subscribe(() => {
	// subscribe func is triggers when you have some changes on store
	localStorage.setItem("count", store.getState().count.count);
});

export default store;
