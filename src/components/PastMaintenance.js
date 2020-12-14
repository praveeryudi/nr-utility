import React, {useEffect} from 'react';
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import Select from "@material-ui/core/Select/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {makeStyles} from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import NumberFormatCustom from ".././util/NumberFormatCustom";
import TextField from "@material-ui/core/TextField";
import {FETCH_PAST_MAINTENANCE_DATA} from "../ApiConstants";
import MaintenanceChart from "../containers/MaintenanceChart";

const useStyles = makeStyles(theme => ({
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
            marginBottom: theme.spacing(2),
            padding: theme.spacing(3),
        },
    },
    cardLayout: {
        marginTop: theme.spacing(2),
        marginBottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'space-evenly',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    textField: {
        width: '15ch',
    }
}));

const PastMaintenance = (props) => {
    const classes = useStyles();
    let [period, setPeriod] = React.useState('3');
    let [mapKeys, setMapKeys] = React.useState([]);
    let [mapValues, setMapValues] = React.useState([]);

    useEffect(() => {
        const onLoad = async () => {
            await fetch(FETCH_PAST_MAINTENANCE_DATA + '3')
                .then(response => response.json())
                .then(data => {
                    setMapValues(() => Object.values(data));
                    setMapKeys(() => Object.keys(data));
                });
        };
        onLoad();
    }, []);

    const handleChange = async (event) => {
        event.preventDefault();
        setPeriod(() => event.target.value);
        await fetch(FETCH_PAST_MAINTENANCE_DATA + event.target.value)
            .then(response => response.json())
            .then(data => {
                setMapValues(() => Object.values(data));
                setMapKeys(() => Object.keys(data));
            });
    };

    return (
        <div>
            <React.Fragment>
                <CssBaseline/>
                <main className={classes.layout}>
                    <Paper className={classes.paper}>
                        <Typography component="h1" variant="h5" align="center" color="secondary">
                            Past Maintenance
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={12}>
                                <InputLabel id="period-select-label">Select Duration</InputLabel>
                                <Select
                                    labelId="period-select-label"
                                    id="period-select"
                                    value={period}
                                    onChange={(event) => handleChange(event)}
                                >
                                    <MenuItem value={3}>{'3 Months'}</MenuItem>
                                    <MenuItem value={6}>{'6 Months'}</MenuItem>
                                    <MenuItem value={9}>{'9 Months'}</MenuItem>
                                    <MenuItem value={12}>{'12 Months'}</MenuItem>
                                </Select>
                            </Grid>
                        </Grid>
                    </Paper>
                </main>
            </React.Fragment>

            <div className={classes.cardLayout}>
                {
                    mapKeys.map((index, key) =>
                        <Card>
                            <CardContent>
                                <TextField
                                    className={classes.textField}
                                    id="outlined-disabled"
                                    label={mapKeys[key]}
                                    value={mapValues[key]}
                                    variant="outlined"
                                    InputProps={{
                                        inputComponent: NumberFormatCustom,
                                        readOnly: true
                                    }}
                                />
                            </CardContent>
                        </Card>
                    )}
            </div>
            <Divider/>
            {/* Charts Display */}
            <div>
                <React.Fragment>
                    <CssBaseline/>
                    <main className={classes.layout}>
                        <Paper className={classes.paper}>
                            <MaintenanceChart chartLabels={[...mapKeys.slice(1)]} chartData={[...mapValues.slice(1)]}/>
                        </Paper>
                    </main>
                </React.Fragment>
            </div>
        </div>
    )
};

/*const mapStateToProps = (state) => ({
    pastMaintenanceData: state.maintenanceReducer.pastMaintenance,
});*/

export default /*connect(mapStateToProps, null)*/(PastMaintenance);