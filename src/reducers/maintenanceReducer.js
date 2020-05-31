const initialState = {
    lookup : []
};

const maintenanceReducer = (state = initialState, action) => {
    switch(action.type) {
        case "FLAT_LOOKUP":
            return {
                ...state,
                lookup: action.payload
            };

        default:
            return state
    }
};

export default maintenanceReducer;