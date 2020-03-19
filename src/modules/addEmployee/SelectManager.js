import TextField from "@material-ui/core/TextField";
import React from "react";

export default function SelectManager() {
    return (
        <TextField
            required
            id="managerId"
            label="Manager"
            fullWidth
        />
    )
};