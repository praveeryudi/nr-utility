import React, {useState} from 'react';
import Grid from '@material-ui/core/Grid';
import SelectFlat from "../components/SelectFlat";
import SelectTxnDate from "../components/SelectTxnDate";
import ActualPayment from "../components/ActualPayment";
import ExpectedPayment from "../components/ExpectedPayment";
import {makeStyles} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography";
import SaveTxnButton from "../components/SaveTxnButton";
import PaymentMode from "../components/PaymentMode";
import SelectMonth from "../components/SelectMonth";
import SelectYear from "../components/SelectYear";
import {fetchIndividualFlatData, saveMaintenance} from "../actions/maintenanceActions";
import {connect, useDispatch, useSelector} from "react-redux";

const useStyles = makeStyles(theme => ({
    appBar: {
        position: 'relative',
    },
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 800,
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
}));


const NewTransactionForm = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    const[selectedFlat, setSelectedFlat] = useState({});
    const[txnDate, setTxnDate] = useState(new Date());
    let[actualPayment, setActualPayment] = useState(0);
    const[paymentMode, setPaymentMode] = useState('online');
    const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth());
    const[selectedYear, setSelectedYear] = useState(new Date().getFullYear());

    const submitTxn = async () => {
        const {flatNumber} = selectedFlat;
        const {expectedMaintenance} = selectedFlat;
        actualPayment = actualPayment === 0 ? expectedMaintenance : actualPayment;
        let objToSave = {
            flatNumber,
            expectedMaintenance,
            actualPayment,
            txnDate,
            selectedMonth,
            selectedYear,
            paymentMode
        };
        console.log(objToSave);
        await props.saveAction(objToSave);
    };

    return (

        <React.Fragment>
            <CssBaseline />
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" align="center">
                        Add Maintenance
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={4}>
                            <SelectFlat flatSelected={val => {
                                setSelectedFlat(val);
                                dispatch({
                                    type: "INDIVIDUAL_FLAT_LOOKUP",
                                    payload: val
                                })
                            }}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <ExpectedPayment />
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <ActualPayment actualPayment={val => {
                                setActualPayment(val);
                                dispatch({
                                    type: "SET_TXN_AMOUNT",
                                    payload: val
                                })
                            }}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <SelectTxnDate txnDate={val => {
                                setTxnDate(val);
                                dispatch({
                                    type: "SET_TXN_DATE",
                                    payload: val
                                })
                            }}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <SelectMonth selectedMonth={val => {
                                setSelectedMonth(val);
                                dispatch({
                                    type: "SET_MONTH",
                                    payload: val
                                })
                            }}/>
                        </Grid>

                        <Grid item xs={12} sm={4}>
                            <SelectYear selectedYear={val => {
                                setSelectedYear(val);
                                dispatch({
                                    type: "SET_YEAR",
                                    payload: val
                                })
                            }}/>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <PaymentMode paymentMode={val => {
                                setPaymentMode(val);
                                dispatch({
                                    type: "SET_PAYMENT_MODE",
                                    payload: val
                                })
                            }} />
                        </Grid>


                    </Grid>
                    <React.Fragment>
                        <div className={classes.buttons}>
                            <SaveTxnButton passAction={() => submitTxn()}/>
                        </div>
                    </React.Fragment>
                </Paper>
            </main>
            {props.txnResponseProp && <h1>{props.txnResponseProp.infoMessage}</h1>}
        </React.Fragment>
    );
};

const mapStateToProps = state => ({
    txnResponseProp: state.maintenanceReducer.txnResponse,
});

const mapDispatchToProps = (dispatch) => ({
    saveAction: (objToSave) => dispatch(saveMaintenance(objToSave)),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewTransactionForm);