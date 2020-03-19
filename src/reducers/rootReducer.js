import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import employeeReducer from "./employeeReducer";

const rootReducer = combineReducers({
    form: formReducer,
    empReducer: employeeReducer
});

export default rootReducer;