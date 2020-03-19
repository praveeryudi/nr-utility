import React from "react";
import TextField from "@material-ui/core/TextField";

export default function CommissionField() {
  return (
      <TextField
          type="number"
          id="commissionPct"
          label="Commission%"
          fullWidth
      />
  )
};