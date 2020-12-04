import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import {fetchFloorTotalData} from "../actions/maintenanceActions";
import {connect, useDispatch} from "react-redux";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Grid from "@material-ui/core/Grid";
import SelectMonth from "./SelectMonth";
import SelectYear from "./SelectYear";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({

    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
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

const GetTotal = (props) => {

    const classes = useStyles();
    const dispatch = useDispatch();
    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());

    const fetchFloorTotal = (event) => {
        event.preventDefault();
        console.log(selectedMonth, selectedYear);
        dispatch(fetchFloorTotalData(selectedMonth + 1, selectedYear));
    };

    const keys = Object.keys(props.floorTotalProp);
    const mapValues = Object.values(props.floorTotalProp);

    return (
        <div>
            <React.Fragment>
                <CssBaseline />
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5" align="center">
                            Floor Wise Total
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <SelectMonth selectedMonth={val => {
                                    setSelectedMonth(val);
                                }}/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
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
                                    onClick={fetchFloorTotal}
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
                    <Grid container justify="center" spacing={10}>
                        <Grid key={keys[0]} item>
                            <Typography variant="h6" className={classes.title}>
                                Ground Floor
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {mapValues[keys[0]]}
                            </Typography>
                        </Grid>

                        <Grid key={keys[1]} item>
                            <Typography variant="h6" className={classes.title}>
                                1st Floor
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {mapValues[keys[1]]}
                            </Typography>
                        </Grid>

                        <Grid key={keys[2]} item>
                            <Typography variant="h6" className={classes.title}>
                                2nd Floor
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {mapValues[keys[2]]}
                            </Typography>
                        </Grid>

                        <Grid key={keys[3]} item>
                            <Typography variant="h6" className={classes.title}>
                                3rd Floor
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {mapValues[keys[3]]}
                            </Typography>
                        </Grid>

                        <Grid key={keys[4]} item>
                            <Typography variant="h6" className={classes.title}>
                                4th Floor
                            </Typography>
                            <Typography variant="h5" component="h2">
                                {mapValues[keys[4]]}
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

const mapStateToProps = state => ({
    floorTotalProp: state.maintenanceReducer.floorTotal,
});

export default connect(mapStateToProps, null)(GetTotal);