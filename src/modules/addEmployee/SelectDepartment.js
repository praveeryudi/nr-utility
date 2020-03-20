import TextField from "@material-ui/core/TextField";
import React from "react";
import {useDispatch} from "react-redux";

export default function SelectDepartment() {

    const dispatch = useDispatch();

    const handleDeptChange = (event) => {
      event.preventDefault();
      dispatch({
          type: "SET_EMPLOYEE_DEPT",
          payload: event.target.value
      });
    };

    return (
        <TextField
            required
            id="deptId"
            label="Department"
            fullWidth
        />
    )
};