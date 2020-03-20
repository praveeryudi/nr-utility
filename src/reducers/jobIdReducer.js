const initialState = {
    jobs : [],
    selectedJobTitle : ''
};

const jobIdReducer = (state = initialState, action) => {
    switch(action.type) {
        case "LIST_JOBS":
            return {
                ...state,
                jobs: action.payload
            };

        case "SELECTED_JOB":
            return {
              ...state,
                selectedJobTitle: action.payload
            };

        default:
            return state
    }
};

export default jobIdReducer;