import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchAllFlatData} from "../actions/maintenanceActions.js";
import {fetchIndividualFlatData} from "../actions/maintenanceActions";

const useStyles = makeStyles(theme => ({
    formControl: {
        minWidth: 242,
    }
}));

export default function SelectFlat(props) {

    const dispatch = useDispatch();
    let flatList = useSelector(state => state.maintenanceReducer.lookup);

    useEffect(() => {
        dispatch(fetchAllFlatData());
    }, [dispatch]);

    const classes = useStyles();
    let[flat, setFlat] = React.useState({});

    const handleFlatNumberChange = (event) => {
        event.preventDefault();
        //console.log("FlatData = ", event.target.value);
        setFlat(event.target.value);
        props.flatSelected(event.target.value);
        //dispatch(fetchIndividualFlatData(event.target.value));
    };

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="flat-label">Flat Number</InputLabel>
        <Select
            labelId="flat-label"
            id="flat-label"
            value={flat}
            onChange={(event) => handleFlatNumberChange(event)}
        >
            {
                flatList.map((flat) =>
                    <MenuItem key={flat.flatNumber} value={flat}>
                        {flat.flatNumber} {flat.ownerName}
                    </MenuItem>)
            }
        </Select>
        </FormControl>
    )
};