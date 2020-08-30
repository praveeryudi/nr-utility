import React, {Component} from 'react';
import axios from 'axios';
import {FETCH_OC_FEES_ALL_ENTRIES} from "../../ApiConstants";
import OCFeesTable from "../../components/OCFeesTable";
import Typography from "@material-ui/core/Typography";

class OCFeesContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            entries: []
        };
        this.renderEditable = this.renderEditable.bind(this);
    }

    componentDidMount() {
        axios.get(FETCH_OC_FEES_ALL_ENTRIES)
            .then(res => {
                const data = res.data;
                console.log(data);
                this.setState({entries : data})
            })
            .catch(function(error) {
                console.error("Error in fetching oc fees entries", error);
            })
    }

    renderEditable = cellInfo => {
        const cellValue = this.state.entries[cellInfo.index][cellInfo.column.id];
        return (
            <div style={{ align: "right" }}>
                <input
                    placeholder="type here"
                    name="input"
                    type="text"
                    onChange={this.handleInputChange.bind(null, cellInfo)}
                    value={cellValue}
                />
            </div>
        );
    };

    handleInputChange = (cellInfo, event) => {
        let entries = [...this.state.entries];
        entries[cellInfo.index][cellInfo.column.id] = event.target.value;
        this.setState({ entries });
    };

    render() {

        const columns = [
            {
                Header: "Flat #",
                accessor: "flatNumber",
                headerStyle: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                }
            },

            {
                Header: "Amount",
                accessor: "actualPayment",
                headerStyle: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                },
                Cell: this.renderEditable
            },

            {
                Header: "Payment Mode",
                accessor: "paymentMode",
                sortable: false,
                headerStyle: {
                    fontSize: '18px',
                    fontWeight: 'bold'
                },
                Cell: row => <div style={{ textAlign: "right" }}>{row.value}</div>
            }
        ];

        return (
            <div>
                <Typography component="h1" variant="h5" align="center">
                    OC Fees Entries
                </Typography>
                <OCFeesTable columns={columns} data={this.state.entries}/>
            </div>
        );
    }
}

export default OCFeesContainer;