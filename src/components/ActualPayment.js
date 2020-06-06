import NumberFormatCustom from ".././util/NumberFormatCustom";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {connect, useDispatch} from "react-redux";

const ActualPayment = (props) => {

    const [value, setValue] = React.useState(props.fixedMaintenance);

    //const dispatch = useDispatch();

    const handleAmountChange = name => event => {
        setValue(event.target.value);
        /*dispatch({
            type: "SET_TXN_AMOUNT",
            payload: event.target.value
        });*/
        props.actualPayment(event.target.value);
    };

    return (
        <TextField
            required
            id="actualPayment"
            defaultValue={value === 0 ? 0 : props.fixedMaintenance}
            value={value === 0 ? props.fixedMaintenance : value}
            onChange={handleAmountChange('numberformat')}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
            label="Actual Payment"
            fullWidth
        />
    )
};

const mapStateToProps = (state) => ({
    fixedMaintenance: null === state.maintenanceReducer.flatLookup ? 0 : state.maintenanceReducer.flatLookup.expectedMaintenance
});

export default connect(mapStateToProps, null)(ActualPayment);