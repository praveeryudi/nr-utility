import React, {Component} from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import TransactionsTable from ".././components/TransactionsTable";
import {connect} from 'react-redux';
import {fetchAllTransactions, removeTransaction} from '../actions/maintenanceActions';
import {ShowDeleteDialog} from "../util/DialogUtils";
//import injectTapEventPlugin from "react-tap-event-plugin";

//injectTapEventPlugin();

class TxnData extends Component {

    handleRemove = ids => {
        this.props.removeTxn(ids);
    };

    componentDidMount() {
        this.props.fetchAllTransactions();
    }

    render() {
        return (
            <MuiThemeProvider>
                <div className="App">
                    {this.props.txnResponse && <ShowDeleteDialog message={this.props.txnResponse.infoMessage}/>}
                    <TransactionsTable
                        data={this.props.transactions}
                        txnIdsToDelete={(ids) => this.handleRemove(ids)}
                    />
                </div>
            </MuiThemeProvider>
        );
    }
}

const mapStateToProps = (state) => ({
    transactions: state.maintenanceReducer.txnData,
    txnResponse: state.maintenanceReducer.txnResponse,
});

const mapDispatchToProps = dispatch => ({
    fetchAllTransactions: () => dispatch(fetchAllTransactions()),
    removeTxn: (txnIds) => dispatch(removeTransaction(txnIds)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TxnData);