const state = {
    employees : [],
};

const employeeReducer = (action, payload) => {
    switch(action.type) {
        case "LIST_EMPLOYEES":
            return {
                ...state,
                employees: action.payload
            }

        default:
            return state
    }
}

export default employeeReducer;