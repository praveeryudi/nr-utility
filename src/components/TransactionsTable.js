import React from 'react';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

/*const row = (x, i, header, handleRemove) => (
    <TableRow key={`tr-${i}`} selectable={false}>
        {header.map((y,k) => (
            <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
        ))}
        <TableRowColumn>
            <DeleteForeverIcon onClick={() => handleRemove(i)} />
        </TableRowColumn>
    </TableRow>
);*/

const TransactionsTable = ({ data }) => {

    const getMuiTheme = () => createMuiTheme({
        overrides: {

            MUIDataTableHeadCell: {
                root: {
                    fontWeight: 'bold',
                },
            },
        }
    });

    const columns = [
        {
            name: "flatNumber",
            label: "Flat Number",
            options: {
                filter: true,
                sort: true
            }
        },
        {
            name: "txnDate",
            label: "Paid On",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "month",
            label: "Month",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "year",
            label: "Year",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "actualPayment",
            label: "Amount Paid",
            options: {
                filter: false,
                sort: true,
            }
        },
        {
            name: "paymentMode",
            label: "Payment Mode",
            options: {
                filter: true,
                sort: true,
                setCellProps: () => ({ align: 'left' }),
                customBodyRender: (value) => {
                    return value.toUpperCase();
                },
            }
        },
        {
            name: "balance",
            label: "Balance",
            options: {
                filter: false,
                sort: true,
                setCellProps: () => ({ align: 'center' }),
            }
        },
    ];

    const options = {
        filter: true,
        filterType: 'checkbox',
        responsive: 'scrollMaxHeight',
        rowsPerPage: 15,
        jsonMode: true,
        selectableRows: true,
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
    };

    return (
        <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            title={"Transactions"}
            data={data}
            columns={columns}
            options={options}
        />
        </MuiThemeProvider>

        /*<Table>
            <TableHeader>
                <TableRow>
                    {header.map((x, i) => (
                        <TableHeaderColumn key={`thc-${i}`}>{x.name}</TableHeaderColumn>
                    ))}
                    <TableHeaderColumn />
                    <TableHeaderColumn />
                </TableRow>
            </TableHeader>
            <TableBody>
                {data.map((x, i) =>
                    row(
                        x,
                        i,
                        header,
                        handleRemove
                    )
                )}
            </TableBody>
        </Table>*/
    );
};

export default TransactionsTable;