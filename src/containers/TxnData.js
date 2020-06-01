import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TransactionsTable from ".././components/TransactionsTable";
import {connect} from 'react-redux';
import {fetchAllTransactions, removeTransaction} from '../actions/maintenanceActions';
//import injectTapEventPlugin from "react-tap-event-plugin";

//injectTapEventPlugin();

class TxnData extends Component {

    handleRemove = i => {
        console.log("I = ", i, JSON.stringify(this.props.transactions[i]));
        this.props.removeTxn(this.props.transactions, this.props.transactions[i]);
        //this.props.transactions.filter((row, j) => j !== i);
    };

    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    <TransactionsTable
                        handleRemove={this.handleRemove}
                        data={this.props.transactions}
                        header={[
                            {
                                name: "Txn Date",
                                prop: "txnDate"
                            },
                            {
                                name: "Flat #",
                                prop: "flatNumber"
                            },
                            {
                                name: "Month",
                                prop: "month"
                            },
                            {
                                name: "Year",
                                prop: "year"
                            },
                            {
                                name: "Actual Payment",
                                prop: "actualPayment"
                            },
                            {
                                name: "Payment Mode",
                                prop: "paymentMode"
                            },
                            {
                                name: "Balance",
                                prop: "balance"
                            }
                        ]}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({
    transactions: state.maintenanceReducer.txnData,
});

const mapDispatchToProps = dispatch => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    removeTxn: (txnArr, txnToRemove) => dispatch(removeTransaction(txnArr, txnToRemove)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TxnData);