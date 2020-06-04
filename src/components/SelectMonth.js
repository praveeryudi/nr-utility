import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
    formControl: {
        minWidth: 120,
        marginTop: theme.spacing(2),
    },
}));

export default function SelectMonth(props) {
    const classes = useStyles();
    const [month, setMonth] = React.useState(new Date().getMonth());

    const handleChange = (event) => {
        event.preventDefault();
        setMonth(event.target.value);
        props.selectedMonth(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="demo-simple-select-label">Month</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={month}
                    onChange={handleChange}
                >
                    <MenuItem value={0}>JAN</MenuItem>
                    <MenuItem value={1}>FEB</MenuItem>
                    <MenuItem value={2}>MAR</MenuItem>
                    <MenuItem value={3}>APR</MenuItem>
                    <MenuItem value={4}>MAY</MenuItem>
                    <MenuItem value={5}>JUN</MenuItem>
                    <MenuItem value={6}>JUL</MenuItem>
                    <MenuItem value={7}>AUG</MenuItem>
                    <MenuItem value={8}>SEP</MenuItem>
                    <MenuItem value={9}>OCT</MenuItem>
                    <MenuItem value={10}>NOV</MenuItem>
                    <MenuItem value={11}>DEC</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
