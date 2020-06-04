import TextField from "@material-ui/core/TextField";
import React from "react";
import {connect} from "react-redux";

const ExpectedPayment = (props) => {

    return (
        <TextField
            disabled
            value={props.fixedMaintenance}
            id="expectedPayment"
            label="Expected Payment"
        />
    )
};

const mapStateToProps = (state) => ({
    fixedMaintenance: null === state.maintenanceReducer.flatLookup ? 0 : state.maintenanceReducer.flatLookup.expectedMaintenance
});

export default connect(mapStateToProps, null)(ExpectedPayment);