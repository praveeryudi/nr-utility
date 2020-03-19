import NumberFormatCustom from "../../util/NumberFormatCustom";
import TextField from "@material-ui/core/TextField";
import React from "react";

export default function SalaryField() {

    const [values, setValues] = React.useState({
        numberformat: '1320',
    });

    const handleSalaryChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    return (
        <TextField
            required
            id="salary"
            value={values.numberformat}
            onChange={handleSalaryChange('numberformat')}
            InputProps={{
                inputComponent: NumberFormatCustom,
            }}
            label="Fixed Salary"
            fullWidth
        />
    )
};