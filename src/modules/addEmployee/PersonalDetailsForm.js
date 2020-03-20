import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";

const PersonalDetailsForm = () => {

    const dispatch = useDispatch();

    return (
        <React.Fragment>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        onChange={(event) => dispatch({
                            type: "SET_EMPLOYEE_FIRST_NAME",
                            payload: event.target.value
                        })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        onChange={(event) => dispatch({
                            type: "SET_EMPLOYEE_LAST_NAME",
                            payload: event.target.value
                        })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="email"
                        name="email"
                        label="Email"
                        fullWidth
                        onChange={(event) => dispatch({
                            type: "SET_EMPLOYEE_EMAIL",
                            payload: event.target.value
                        })}
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone"
                        name="phone"
                        label="Phone"
                        fullWidth
                        onChange={(event) => dispatch({
                            type: "SET_EMPLOYEE_PHONE",
                            payload: event.target.value
                        })}
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
};

export default PersonalDetailsForm;