const host = "praveeryudi-org.cfapps.io";
//const host = "localhost:1010";

export const FETCH_ALL_EMPLOYEES = `https://${host}/employees/all`;
export const FETCH_ALL_JOBS = `https://${host}/jobs/all`;
export const FETCH_ALL_MANAGERS = `https://${host}/managers/all`;
export const FETCH_EMPLOYEE_JOB_HISTORY = `https://${host}/api/fetch/employee/jobHistory/`;

export const LOAD_MAINTENANCE_MASTER_DATA = `https://${host}/maintenance/lookup`;
export const FETCH_ALL_TRANSACTIONS = `https://${host}/maintenance/transactions/all`;
export const DELETE_TRANSACTION = `https://${host}/maintenance/deleteTxn`;

export const FETCH_INDIVIDUAL_FLAT_DATA = `https://${host}/maintenance/flat/`;
export const SAVE_MAINTENANCE_DATA = `https://${host}/maintenance/addMaintenance`;
export const SAVE_MAINTENANCE_BATCH_DATA = `https://${host}/maintenance/addMaintenanceBatch`;
export const PENDING_MAINTENANCE_DATA = `https://${host}/maintenance/pending/`;