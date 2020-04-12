import React from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import {useDispatch} from "react-redux";
import DateFnsUtils from "@date-io/date-fns";
import {KeyboardDatePicker, MuiPickersUtilsProvider} from "@material-ui/pickers";
import NumberFormatCustom from "../util/NumberFormatCustom";

const NewExpenseForm = () => {

    const dispatch = useDispatch();
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const [values, setValues] = React.useState({
        numberformat: '1320',
    });
    const handleDateChange = date => {
        setSelectedDate(date);
        dispatch({
            type: "SET_EMPLOYEE_HIRE_DATE",
            payload: date
        });
    };

    const handleAmountChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
        dispatch({
            type: "SET_EMPLOYEE_SALARY",
            payload: event.target.value
        });
    };

    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                    <KeyboardDatePicker
                        required
                        disableToolbar
                        fullWidth
                        variant="inline"
                        format="MM/dd/yyyy"
                        margin="normal"
                        id="expenseDate"
                        value={selectedDate}
                        onChange={handleDateChange}
                        label="Expense Date"
                        KeyboardButtonProps={{
                            'aria-label': 'change date',
                        }}
                    />
                </MuiPickersUtilsProvider>
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="expenseTitle"
                    name="expenseTitle"
                    label="Expense Title"
                    fullWidth
                    onChange={(event) => dispatch({
                        type: "SET_EXPENSE_TITLE",
                        payload: event.target.value
                    })}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="salary"
                    value={values.numberformat}
                    onChange={handleAmountChange('numberformat')}
                    InputProps={{
                        inputComponent: NumberFormatCustom,
                    }}
                    label="Amount"
                    fullWidth
                    onChange={(event) => dispatch({
                                            type: "SET_EXPENSE_AMOUNT",
                                            payload: event.target.value
                                        })}
                />
            </Grid>

            <Grid item xs={12} sm={6}>
                <TextField
                    required
                    id="enteredBy"
                    name="enteredBy"
                    label="Entered By"
                    fullWidth
                    onChange={(event) => dispatch({
                        type: "SET_EXPENSE_ENTERED_BY",
                        payload: event.target.value
                    })}
                />
            </Grid>
        </Grid>
    );
};

export default NewExpenseForm;