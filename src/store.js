import rootReducer from "./reducers/rootReducer";
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';
import {createStore} from "redux";

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;