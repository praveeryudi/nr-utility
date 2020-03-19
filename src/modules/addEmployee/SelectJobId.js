import TextField from "@material-ui/core/TextField";
import React from "react";

export default function SelectJobId() {
    return (
        <TextField
            required
            id="jobId"
            label="Job Id"
            fullWidth
        />
    )
};