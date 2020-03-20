import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllManagers} from "./../../actions/employeeActions";
import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(0),
        minWidth: 242,
    }
}));

export default function SelectManager() {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllManagers());
    }, [dispatch]);

    let managerList = useSelector(state => state.empReducer.managers);
    let[selectedManager, setSelectedManager] = React.useState(0);

    const handleManagerChange = (event) => {
        event.preventDefault();
        setSelectedManager(event.target.value);
        dispatch({
            type: "SET_EMPLOYEE_MANAGER",
            payload: event.target.value
        });
    };

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="manager-label">Manager</InputLabel>
            <Select
                labelId="manager-label"
                id="manager-label"
                value={selectedManager}
                onChange={(event) => handleManagerChange(event)}
            >
                {
                    managerList.map((manager) =>
                        <MenuItem key={manager.id} value={manager.id}>
                            {manager.firstName} {manager.lastName}
                        </MenuItem>)
                }
            </Select>
        </FormControl>
    )
};