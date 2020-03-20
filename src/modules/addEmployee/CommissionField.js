import React from "react";
import {useDispatch} from "react-redux";
import TextField from "@material-ui/core/TextField";

export default function CommissionField() {

  const dispatch = useDispatch();

  const handleCommissionPctChange = (event) => {
    event.preventDefault();
    dispatch({
        type: "SET_EMPLOYEE_COMMISSION",
        payload: event.target.value
    });
  };

  return (
      <TextField
          type="number"
          id="commissionPct"
          label="Commission%"
          fullWidth
          onChange={(event) => handleCommissionPctChange(event)}
      />
  )
};