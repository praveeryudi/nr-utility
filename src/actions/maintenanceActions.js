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

export const fetchAllTransactions = () => {
    return async(dispatch) => {
        await axios.get(Urls.FETCH_ALL_TRANSACTIONS)
            .then(res => {
                let data = res.data;
                dispatch({
                    type: "GET_ALL_TRANSACTIONS",
                    payload: data});
            })
            .catch(function(error) {
                console.error("Error in fetching transactions", error);
            })
    };
};

export const removeTransaction = (txnArr, txnObj) => {
    return async(dispatch) => {
        await axios.delete(Urls.DELETE_TRANSACTION, txnObj)
            .then(() => {
                const txnIndex = txnArr.findIndex(txn => txn.txnId === txnObj.txnId);
                const updatedTxns = [
                    ...txnArr.slice(0, txnIndex - 1),
                    ...txnArr.slice(txnIndex + 1),
                ];
                dispatch({
                    type: "UPDATE_TRANSACTIONS",
                    payload: updatedTxns});
            })
            .catch(function(error) {
                console.error("Error in deleting transaction", error);
            })
    };
};