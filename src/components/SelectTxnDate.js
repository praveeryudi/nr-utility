import React from 'react';
import {useDispatch} from "react-redux";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import {KeyboardDatePicker, MuiPickersUtilsProvider} from '@material-ui/pickers';

export default function SelectTxnDate(props) {

    const [selectedDate, setSelectedDate] = React.useState(new Date());

    //const dispatch = useDispatch();

    const handleDateChange = date => {
        setSelectedDate(date);
        props.txnDate(date);
      /*  dispatch({
            type: "SET_TXN_DATE",
            payload: date
        });*/
    };

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
                required
                disableToolbar
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="txnDate"
                value={selectedDate}
                onChange={handleDateChange}
                label="Transaction Date"
                KeyboardButtonProps={{
                    'aria-label': 'change date',
                }}
            />
        </MuiPickersUtilsProvider>
    )
};