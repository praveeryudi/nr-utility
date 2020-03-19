import React from 'react';
import Grid from '@material-ui/core/Grid';
import SalaryField from "./SalaryField";
import CommissionField from "./CommissionField";
import SelectManager from "./SelectManager";
import SelectJobId from "./SelectJobId";
import SelectDepartment from "./SelectDepartment";
import SelectHireDate from "./SelectHireDate";

const JobDetailsForm = () => {

    return (
        <React.Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <SelectHireDate />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectJobId />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SalaryField />
                </Grid>
                <Grid item xs={12} md={6}>
                    <CommissionField />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectManager />
                </Grid>
                <Grid item xs={12} md={6}>
                    <SelectDepartment />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default JobDetailsForm;