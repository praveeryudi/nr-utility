//const host = "praveeryudi-org.cfapps.io";
const host = "localhost:1010";
const protocol = "http";

export const FETCH_ALL_EMPLOYEES = `https://${host}/employees/all`;
export const FETCH_ALL_JOBS = `https://${host}/jobs/all`;
export const FETCH_ALL_MANAGERS = `https://${host}/managers/all`;
export const FETCH_EMPLOYEE_JOB_HISTORY = `https://${host}/api/fetch/employee/jobHistory/`;

export const LOAD_MAINTENANCE_MASTER_DATA = `${protocol}://${host}/maintenance/lookup`;
export const FETCH_ALL_TRANSACTIONS = `${protocol}://${host}/maintenance/transactions/all`;
export const DELETE_TRANSACTION = `${protocol}://${host}/maintenance/deleteTxn`;

export const FETCH_INDIVIDUAL_FLAT_DATA = `${protocol}://${host}/maintenance/flat/`;
export const SAVE_MAINTENANCE_DATA = `${protocol}://${host}/maintenance/addMaintenance`;
export const SAVE_MAINTENANCE_BATCH_DATA = `${protocol}://${host}/maintenance/addMaintenanceBatch`;
export const PENDING_MAINTENANCE_DATA = `${protocol}://${host}/maintenance/pending/`;
export const FETCH_FLOOR_TOTAL = `${protocol}://${host}/maintenance/floorTotal/`;
export const FETCH_PAST_MAINTENANCE_DATA = `${protocol}://${host}/bi/periodData/`;