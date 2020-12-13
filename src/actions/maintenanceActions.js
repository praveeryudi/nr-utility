import axios from "axios";
import * as Urls from "./../ApiConstants";

export const fetchAllFlatData = () => {
    return async(dispatch) => {
        await axios.get(Urls.LOAD_MAINTENANCE_MASTER_DATA)
            .then(async res => {
                let data = res.data;
                await dispatch({
                    type: "FLAT_LOOKUP",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching flat look up data", error);
            })
    };
};

/*export const fetchIndividualFlatData = (flatNumber) => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_INDIVIDUAL_FLAT_DATA + flatNumber)
            .then(async res => {
                let data = res.data;
                await dispatch({
                    type: "INDIVIDUAL_FLAT_LOOKUP",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching individual flat look up data", error);
            })
    };
};*/

export const saveMaintenance = (txnObj) => {
    return async(dispatch) => {

        await axios.post(Urls.SAVE_MAINTENANCE_DATA, txnObj)
            .then(async res => {
                let data = res.data;
                await dispatch({
                    type: "SAVE_TRANSACTION",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in saving transaction", error);
            })
    };
};

export const fetchPastMaintenance = (period) => {
    return async(dispatch) => {

        await axios.get(Urls.FETCH_PAST_MAINTENANCE_DATA + period)
            .then(async res => {
                let data = res.data;
                await dispatch({
                    type: "GET_PAST_MAINTENANCE",
                    payload: data});
                console.log("==== 2 =====");
            })
            .catch(function(error) {
                console.error("Error in getting past maintenance data", error);
            })

    };
};

export const fetchAllTransactions = () => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_ALL_TRANSACTIONS)
            .then(async res => {
                let data = res.data;
                await dispatch({
                    type: "GET_ALL_TRANSACTIONS",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching transactions", error);
            })
    };
};

export const removeTransaction = (txnIds) => {
    return async(dispatch) => {
        await axios.delete(Urls.DELETE_TRANSACTION, { data: txnIds })
            .then(async res => {
                /*const txnIndex = txnArr.findIndex(txn => txn.txnId === txnObj.txnId);
                const updatedTxns = [
                    ...txnArr.slice(0, txnIndex - 1),
                    ...txnArr.slice(txnIndex + 1),
                ];
                await dispatch({
                    type: "UPDATE_TRANSACTIONS",
                    payload: updatedTxns});*/
                const data = res.data;
                await dispatch({
                    type: "DELETE_TRANSACTIONS",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in deleting transaction", error);
            })
    };
};

export const pendingMaintenanceData = (month, year) => {
    return async(dispatch) => {
        await axios.get(Urls.PENDING_MAINTENANCE_DATA + month + "/" + year)
            .then(async res => {
                const result = res.data;
                await dispatch({
                    type: "PENDING_TRANSACTIONS",
                    payload: result});
            })
            .catch(function(error) {
                console.error("Error in fetching pending transactions", error);
            })
    };
};

export const fetchFloorTotalData = (month, year) => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_FLOOR_TOTAL + month + "/" + year)
            .then(async res => {
                const result = res.data;
                await dispatch({
                    type: "FLOOR_TOTAL",
                    payload: result});
            })
            .catch(function(error) {
                console.error("Error in fetching floor totals", error);
            })
    };
};