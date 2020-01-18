import {combineReducers} from "redux";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
    empReducer: employeeReducer,
});

export default rootReducer;