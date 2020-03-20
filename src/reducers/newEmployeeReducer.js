const initialState = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    hireDate: '',
    jobId: '',
    salary: 0,
    commissionPct: 0,
    managerId: 0,
    departmentId: 0
};

const newEmployeeReducer = (state = initialState, action) => {
    switch(action.type) {
        case "SET_EMPLOYEE_FIRST_NAME":
            return {
                ...state,
                firstName: action.payload
            };

        case "SET_EMPLOYEE_LAST_NAME":
            return {
                ...state,
                lastName: action.payload
            };

        case "SET_EMPLOYEE_EMAIL":
            return {
                ...state,
                email: action.payload
            };

        case "SET_EMPLOYEE_PHONE":
            return {
                ...state,
                phoneNumber: action.payload
            };

        case "SET_EMPLOYEE_HIRE_DATE":
            return {
                ...state,
                hireDate: action.payload
            };

        case "SET_EMPLOYEE_SALARY":
            return {
                ...state,
                salary: action.payload
            };

        case "SET_EMPLOYEE_JOB_ID":
            return {
                ...state,
                jobId: action.payload
            };

        case "SET_EMPLOYEE_COMMISSION":
            return {
                ...state,
                commissionPct: action.payload
            };

        case "SET_EMPLOYEE_MANAGER":
            return {
                ...state,
                managerId: action.payload
            };

        case "SET_EMPLOYEE_DEPT":
            return {
                ...state,
                departmentId: action.payload
            };


        default:
            return state
    }
};

export default newEmployeeReducer;