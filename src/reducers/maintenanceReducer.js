const initialState = {
    lookup : [],
    flatLookup : null,
    txnData : [],
    txnDate : null,
    txnAmount : 0,
    paymentMode : 'online',
    selectedMonth : new Date().getMonth(),
    selectedYear : new Date().getFullYear(),
    txnResponse : null,
    pendingTxns : new Map(),
    floorTotal : new Map()
};

const defaultState = {
    lookup : [],
    flatLookup : null,
    txnData : [],
    txnDate : null,
    txnAmount : 0,
    paymentMode : 'online',
    selectedMonth : new Date().getMonth(),
    selectedYear : new Date().getFullYear(),
    txnResponse : null,
    pendingTxns : new Map(),
    floorTotal : new Map()
};

const maintenanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FLAT_LOOKUP":
            return {
                ...state,
                lookup: action.payload
            };

        case "INDIVIDUAL_FLAT_LOOKUP":
            return {
                ...state,
                flatLookup : action.payload
            };

        case "SET_TXN_DATE":
            return {
                ...state,
                txnDate : action.payload
            };

        case "SET_TXN_AMOUNT":
            return {
                ...state,
                txnAmount : action.payload
            };

        case "SET_PAYMENT_MODE":
            return {
                ...state,
                paymentMode : action.payload
            };

        case "SET_MONTH":
            return {
                ...state,
                selectedMonth : action.payload
            };

        case "SET_YEAR":
            return {
                ...state,
                selectedYear : action.payload
            };

        case "SAVE_TRANSACTION":
            return {
                ...state,
                txnResponse : action.payload
            };

        case "GET_ALL_TRANSACTIONS":
            return {
                ...state,
                txnData: action.payload
            };

        case "UPDATE_TRANSACTIONS":
            return {
                ...state,
                txnData: action.payload
            };

        case "DELETE_TRANSACTIONS":
            return {
                ...state,
                txnResponse: action.payload
            };

        case "PENDING_TRANSACTIONS":
            return {
                ...state,
                pendingTxns: action.payload
            };

        case "FLOOR_TOTAL":
            return {
                ...state,
                floorTotal: action.payload
            };

        case "RESET_TRANSACTION":
            return {
                state: defaultState
            };

        default:
            return state
    }
};

export default maintenanceReducer;