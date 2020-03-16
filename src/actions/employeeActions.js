import axios from "axios";
import * as Urls from "./../ApiConstants";

export const fetchAllEmployees = () => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_ALL_EMPLOYEES)
            .then(res => {
                let data = res.data;
                dispatch({
                    type: "LIST_EMPLOYEES",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching employees list", error);
            })
    };
};

export const fetchEmployeeJobHistory = (employeeId) => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_EMPLOYEE_JOB_HISTORY, employeeId)
        .then(async res => {
            const jobHistory = res.data;
            await dispatch({
                type: "JOB_HISTORY_SUCCESS",
                payload: jobHistory
            });
        })
        .catch(function(error) {
            console.error(error);
        })
    }
};