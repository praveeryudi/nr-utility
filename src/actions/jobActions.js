import axios from "axios";
import * as Urls from "./../ApiConstants";

export const fetchAllJobs = () => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_ALL_JOBS)
            .then(res => {
                let data = res.data;
                dispatch({
                    type: "LIST_JOBS",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching jobs", error);
            })
    };
};

export const setSelectedJob = (jobTitle) => {
    return async(dispatch) => {
        await dispatch({
            type: "SELECTED_JOB",
            payload: jobTitle
        })
    }
};