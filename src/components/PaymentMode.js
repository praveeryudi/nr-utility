import React from "react";
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginTop: theme.spacing(10),
    },
}));

export default function PaymentMode(props) {

    const classes = useStyles();

    const handlePaymentModeChange = (event) => {
        event.preventDefault();
        props.paymentMode(event.target.value);
    };

    return (
        <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Mode of Payment</FormLabel>
            <RadioGroup row aria-label="position" name="position" defaultValue="top"
                        onChange={(event) => handlePaymentModeChange(event)}>
                <FormControlLabel
                    value="online"
                    control={<Radio color="primary" />}
                    label="Online"
                    labelPlacement="start"
                />
                <FormControlLabel
                    value="cash"
                    control={<Radio color="secondary" />}
                    label="Cash"
                    labelPlacement="start"
                />
            </RadioGroup>
        </FormControl>
    );
}