import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchAllEmployees, fetchEmployeeJobHistory} from '../actions/employeeActions';
import MUIDataTable from "mui-datatables";

const EmployeesList = (props) => {

    const len = props.employees.length;

    useEffect(() => {
        props.fetchEmployees();
    }, [len]);

    const data = props.employees;
    const columns = [
        {
            name: "id",
            label: "Id",
            options: {
                filter: true,
                sort: true,
                customBodyRender: (value) => {
                    return (
                      <a href={props.fetchJobHistory(value)}>{value}</a>
                    );
                  }
            }
        },
        {
            name: "firstName",
            label: "First Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "lastName",
            label: "Last Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "email",
            label: "Email",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "phoneNumber",
            label: "Phone",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "hireDate",
            label: "Hire Date",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "jobId",
            label: "Job Id",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "salary",
            label: "Salary",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "commissionPct",
            label: "Commission",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "managerId",
            label: "Manager Id",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "departmentId",
            label: "Department Id",
            options: {
                filter: true,
                sort: false,
            }
        },
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'scrollMaxHeight',
        rowsPerPage: 10,
        selectableRows: 'none',
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
    };

    return (
        <MUIDataTable
            title={"Employee List"}
            data={data}
            columns={columns}
            options={options}
        />
    );
};

const mapStateToProps = (state) => ({
    employees: state.empReducer.employees,
});

const mapDispatchToProps = (dispatch) => ({
    fetchEmployees: () => dispatch(fetchAllEmployees()),
    fetchJobHistory: (employeeId) => dispatch(fetchEmployeeJobHistory(employeeId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EmployeesList);