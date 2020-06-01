const initialState = {
    lookup : [],
    txnData : []
};

const maintenanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FLAT_LOOKUP":
            return {
                ...state,
                lookup: action.payload
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

        default:
            return state
    }
};

export default maintenanceReducer;