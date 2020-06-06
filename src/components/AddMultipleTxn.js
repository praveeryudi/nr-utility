import React, {Component} from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';
import SaveOutlinedIcon from '@material-ui/icons/SaveOutlined';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";
import Tooltip from "@material-ui/core/Tooltip/Tooltip";
import {saveMaintenanceInBatch} from "../actions/maintenanceActions";
import {connect} from "react-redux";

const useStyles = makeStyles(theme => ({

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
}));

class AddMultipleTxn extends Component {

    state = {
        rows: []
    };

    handleAddRow = () => {
        const item = {
            flatNumber: '',
            txnDate: new Date(),
            selectedMonth: new Date().toLocaleString('default', { month: 'long' }),
            selectedYear: new Date().getFullYear(),
            actualPayment: '',
            paymentMode: ''
        };
        this.setState({
            rows: [...this.state.rows, item]
        });
    };

    handleRemoveRow = (idx) => {
        console.log(idx);
        let newRows = Array.from(this.state.rows);
        if (idx > -1) {
            newRows.splice(idx, 1);
        }
        this.setState({
            rows: newRows
        });
    };

    handleChange = idx => e => {
        const { name, value } = e.target;
        const rows = [...this.state.rows];
        rows[idx] = {...rows[idx],
            [name]: value
        };
        this.setState({
            rows
        });
    };

    handleSaveAction = () => {
        console.log(this.state.rows);
        this.props.saveBatch(this.state.rows);
    };

    render() {
        const classes = useStyles;
        return (
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography component="h1" variant="h5" align="center">
                        Add Maintenance
                    </Typography>
                    <TableContainer component={Paper}>
                        <Tooltip title="Add Entry" placement="top">
                            <IconButton aria-label="add"
                                        onClick={this.handleAddRow}>
                                <AddBoxIcon />
                            </IconButton>
                        </Tooltip>
                        <Tooltip title="Save" placement="top">
                            <span>
                                <IconButton aria-label="save"
                                            disabled={this.state.rows.length === 0}
                                            onClick={this.handleSaveAction}>
                                    <SaveOutlinedIcon />
                                </IconButton>
                            </span>
                        </Tooltip>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}}>#&nbsp;</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Flat Number</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Month</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Year</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Actual Payment</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Payment Mode</TableCell>
                                    <TableCell style={{backgroundColor: '#000000', color: '#FFFFFF'}} align="right">Delete</TableCell>
                                </TableRow>
                            </TableHead>

                            <TableBody>
                                {this.state.rows.map((item, idx) => (
                                    <TableRow key={idx}>
                                        <TableCell component="th" scope="row">{idx}</TableCell>
                                        <TableCell align="right">
                                            <input
                                                type="text"
                                                name="flatNumber"
                                                value={item.flatNumber}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <input
                                                type="text"
                                                name="month"
                                                value={item.selectedMonth}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <input
                                                type="text"
                                                name="year"
                                                value={item.selectedYear}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <input
                                                type="text"
                                                name="actualPayment"
                                                value={item.actualPayment}
                                                onChange={this.handleChange(idx)}
                                                className="form-control"
                                            />
                                        </TableCell>
                                        <TableCell align="right">
                                            <select name="paymentMode" id="mode"
                                                    className="form-control"
                                                    onChange={this.handleChange(idx)}
                                                    value={item.paymentMode}>
                                                <option value="online">Online</option>
                                                <option value="cash">Cash</option>
                                            </select>
                                        </TableCell>
                                        <TableCell align="right">
                                            <IconButton aria-label="delete"
                                                        onClick={() => this.handleRemoveRow(idx)}>
                                                <DeleteIcon />
                                            </IconButton>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Paper>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    txnResponseProp: state.maintenanceReducer.txnResponse,
});

const mapDispatchToProps = (dispatch) => ({
    saveBatch: (txnArr) => dispatch(saveMaintenanceInBatch(txnArr)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddMultipleTxn);