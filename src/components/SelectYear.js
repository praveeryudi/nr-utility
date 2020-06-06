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

export default function SelectYear(props) {
    const classes = useStyles();
    const [year, setYear] = React.useState(new Date().getFullYear());

    const handleChange = (event) => {
        event.preventDefault();
        setYear(event.target.value);
        props.selectedYear(event.target.value);
    };

    return (
        <div>
            <FormControl className={classes.formControl}>
                <InputLabel id="year-select-label">Year</InputLabel>
                <Select
                    labelId="year-select-label"
                    id="year-select"
                    value={year}
                    onChange={handleChange}
                >
                    <MenuItem value={2020}>2020</MenuItem>
                    <MenuItem value={2021}>2021</MenuItem>
                    <MenuItem value={2022}>2022</MenuItem>
                </Select>
            </FormControl>
        </div>
    );
}
