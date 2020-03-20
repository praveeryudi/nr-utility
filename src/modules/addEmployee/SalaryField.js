import NumberFormatCustom from "../../util/NumberFormatCustom";
import TextField from "@material-ui/core/TextField";
import React from "react";
import {useDispatch} from "react-redux";

export default function SalaryField() {

    const [values, setValues] = React.useState({
        numberformat: '1320',
    });

    const handleSalaryChange = name => event => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
        dispatch({
            type: "SET_EMPLOYEE_SALARY",
            payload: event.target.value
        });
    };

    const dispatch = useDispatch();

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