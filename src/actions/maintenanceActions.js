import axios from "axios";
import * as Urls from "./../ApiConstants";

export const fetchAllFlatData = () => {
    return async(dispatch) => {
        await axios.get(Urls.LOAD_MAINTENANCE_MASTER_DATA)
            .then(res => {
                let data = res.data;
                dispatch({
                    type: "FLAT_LOOKUP",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching flat look up data", error);
            })
    };
};