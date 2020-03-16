const initialState = {
    employees : [],
    currentEmployee : {},
    jobHistory : []
};

const employeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LIST_EMPLOYEES":
            return {
                ...state,
                employees: action.payload
            };

        case "SET_CURRENT_EMPLOYEE":
            return {
                ...state,
                currentEmployee: action.payload
            };

        case "DELETE_EMPLOYEE":
            return {
              ...state,
              employees: action.payload
            };

        case "JOB_HISTORY_SUCCESS":
            return {
              ...state,
              jobHistory: action.payload  
            };

        default:
            return state
    }
};

export default employeeReducer;