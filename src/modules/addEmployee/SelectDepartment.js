import TextField from "@material-ui/core/TextField";
import React from "react";

export default function SelectDepartment() {
    return (
        <TextField
            required
            id="deptId"
            label="Department"
            fullWidth
        />
    )
};