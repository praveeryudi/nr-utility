import {combineReducers} from "redux";
import { reducer as formReducer } from "redux-form";
import employeeReducer from "./employeeReducer";
import jobIdReducer from "./jobIdReducer";
import newEmployeeReducer from "./newEmployeeReducer";

const rootReducer = combineReducers({
    form: formReducer,
    empReducer: employeeReducer,
    jobIdReducer,
    newEmployeeReducer
});

export default rootReducer;