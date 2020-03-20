import {makeStyles} from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {fetchAllJobs} from "../../actions/jobActions";

const useStyles = makeStyles(theme => ({
    formControl: {
        margin: theme.spacing(2),
        minWidth: 242,
    }
}));

export default function SelectJobId() {

    const dispatch = useDispatch();
    let jobList = useSelector(state => state.jobIdReducer.jobs);

    useEffect(() => {
        dispatch(fetchAllJobs());
    }, [dispatch]);

    const classes = useStyles();
    let[jobTitle, setJobTitle] = React.useState('');

    const handleJobIdChange = (event) => {
        event.preventDefault();
        console.log("Job Title = ", event.target.value);
        setJobTitle(event.target.value);
        dispatch({
            type: "SET_EMPLOYEE_JOB_ID",
            payload: event.target.value
        });
    };

    return (
        <FormControl className={classes.formControl}>
        <InputLabel id="job-label">Job Role</InputLabel>
        <Select
            labelId="job-label"
            id="job-label"
            value={jobTitle}
            onChange={(event) => handleJobIdChange(event)}
        >
            {
                jobList.map((job) =>
                    <MenuItem key={job.jobId} value={job.jobId}>
                        { job.jobTitle }
                    </MenuItem>)
            }
        </Select>
        </FormControl>
    )
};