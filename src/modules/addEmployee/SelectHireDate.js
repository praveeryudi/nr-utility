import React from 'react';
import {useDispatch} from "react-redux";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export default function SelectHireDate() {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    const dispatch = useDispatch();

    const handleDateChange = date => {
        setSelectedDate(date);
        dispatch({
            type: "SET_EMPLOYEE_HIRE_DATE",
            payload: date
        });
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                disableToolbar
                fullWidth
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="hireDate"
                label="Hire Date"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
};