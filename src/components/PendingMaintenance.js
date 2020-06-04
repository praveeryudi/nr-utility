import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import {connect, useDispatch} from "react-redux";
import Divider from '@material-ui/core/Divider';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Typography from "@material-ui/core/Typography";
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import Button from "@material-ui/core/Button";
import {pendingMaintenanceData} from "../actions/maintenanceActions";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(2),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
    gridPaper: {
        height: 140,
        width: 100,
    },
    buttons: {
        display: 'flex',
        justifyContent: 'flex-end',
    },
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
        padding: theme.spacing(2),
    },
}));

const PendingMaintenance = (props) => {
    const [spacing, setSpacing] = React.useState(10);
    const classes = useStyles();

    const dispatch = useDispatch();

    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());

    const fetchPendingTxns = (event) => {
        event.preventDefault();
        console.log(selectedMonth, selectedYear);
        dispatch(pendingMaintenanceData(selectedMonth + 1, selectedYear));
    };

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5" align="center">
                            Pending Maintenance
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6} fullWidth>
                                <SelectMonth selectedMonth={val => {
                                    setSelectedMonth(val);
                                }}/>
                            </Grid>
                            <Grid item xs={12} sm={6} fullWidth>
                                <SelectYear selectedYear={val => {
                                    setSelectedYear(val);
                                }}/>
                            </Grid>
                        </Grid>
                        <React.Fragment>
                            <div className={classes.buttons}>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={fetchPendingTxns}
                                    className={classes.button}
                                >
                                    Fetch
                                </Button>
                            </div>
                        </React.Fragment>
                    </Paper>
                </main>
            </React.Fragment>
            <Divider />
            <Grid container className={classes.root} spacing={2}>
                <Grid item xs={12}>
                    <Grid container justify="center" spacing={spacing}>
                        <Grid key={"gf"} item>
                            <Paper className={classes.gridPaper} >
                                {props.pendingTxnData.length > 0 &&
                                props.pendingTxnData.map((txn, index) => <li key={txn.key}>{txn.value}</li>)
                                }
                            </Paper>
                        </Grid>

                        <Grid key={"ff"} item>
                            <Paper className={classes.gridPaper} >{"First Floor"}</Paper>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = (state) => ({
    pendingTxnData: state.maintenanceReducer.pendingTxns,
});

export default connect(mapStateToProps, null)(PendingMaintenance);