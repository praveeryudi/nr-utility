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

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';
import {red} from '@material-ui/core/colors';
import Tooltip from '@material-ui/core/Tooltip';

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
    },
    title: {
        margin: theme.spacing(4, 0, 2),
    },
    red: {
        color: theme.palette.getContrastText(red[500]),
        backgroundColor: red[500],
        width: theme.spacing(5),
        height: theme.spacing(5),
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
        height: 325,
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
    const classes = useStyles();

    const dispatch = useDispatch();

    const [selectedMonth, setSelectedMonth] = React.useState(new Date().getMonth());
    const [selectedYear, setSelectedYear] = React.useState(new Date().getFullYear());

    const fetchPendingTxns = (event) => {
        event.preventDefault();
        console.log(selectedMonth, selectedYear);
        dispatch(pendingMaintenanceData(selectedMonth + 1, selectedYear));
    };

    const keys = Object.keys(props.pendingTxnData);
    const mapValues = Object.values(props.pendingTxnData);

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
                    <Grid container justify="center" spacing={10}>
                        <Grid key={keys[0]} item>
                            <Typography variant="h6" className={classes.title}>
                                Ground Floor
                            </Typography>
                            <div className={classes.demo}>
                                <List dense={true}>
                                    {
                                        mapValues[keys[0]] && mapValues[keys[0]].map((flat)=> <Tooltip title={flat.ownerName} placement="left-start">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.red} variant="rounded">
                                                        {flat.ownerName.charAt(0)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={flat.flatNumber}
                                                />
                                            </ListItem>
                                        </Tooltip>)
                                    }
                                </List>
                            </div>
                        </Grid>

                        <Grid key={keys[1]} item>
                            <Typography variant="h6" className={classes.title}>
                                1st Floor
                            </Typography>
                            <div className={classes.demo}>
                                <List dense={true}>
                                    {
                                        mapValues[keys[1]] && mapValues[keys[1]].map((flat)=> <Tooltip title={flat.ownerName} placement="left-start">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.red} variant="rounded">
                                                        {flat.ownerName.charAt(0)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={flat.flatNumber}
                                                />
                                        </ListItem>
                                        </Tooltip>)
                                    }
                                </List>
                            </div>
                        </Grid>

                        <Grid key={keys[2]} item>
                            <Typography variant="h6" className={classes.title}>
                                2nd Floor
                            </Typography>
                            <div className={classes.demo}>
                                <List dense={true}>
                                    {
                                        mapValues[keys[2]] && mapValues[keys[2]].map((flat)=> <Tooltip title={flat.ownerName} placement="left-start">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.red} variant="rounded">
                                                        {flat.ownerName.charAt(0)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={flat.flatNumber}
                                                />
                                            </ListItem>
                                        </Tooltip>)
                                    }
                                </List>
                            </div>
                        </Grid>

                        <Grid key={keys[3]} item>
                            <Typography variant="h6" className={classes.title}>
                                3rd Floor
                            </Typography>
                            <div className={classes.demo}>
                                <List dense={true}>
                                    {
                                        mapValues[keys[3]] && mapValues[keys[3]].map((flat)=> <Tooltip title={flat.ownerName} placement="left-start">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.red} variant="rounded">
                                                        {flat.ownerName.charAt(0)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={flat.flatNumber}
                                                />
                                            </ListItem>
                                        </Tooltip>)
                                    }
                                </List>
                            </div>
                        </Grid>

                        <Grid key={keys[4]} item>
                            <Typography variant="h6" className={classes.title}>
                                4th Floor
                            </Typography>
                            <div className={classes.demo}>
                                <List dense={true}>
                                    {
                                        mapValues[keys[4]] && mapValues[keys[4]].map((flat)=> <Tooltip title={flat.ownerName} placement="left-start">
                                            <ListItem>
                                                <ListItemAvatar>
                                                    <Avatar className={classes.red} variant="rounded">
                                                        {flat.ownerName.charAt(0)}
                                                    </Avatar>
                                                </ListItemAvatar>
                                                <ListItemText
                                                    primary={flat.flatNumber}
                                                />
                                            </ListItem>
                                        </Tooltip>)
                                    }
                                </List>
                            </div>
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