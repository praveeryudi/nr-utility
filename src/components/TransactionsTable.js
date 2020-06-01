import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const row = (x, i, header, handleRemove) => (
    <TableRow key={`tr-${i}`} selectable={false}>
        {header.map((y,k) => (
            <TableRowColumn key={`trc-${k}`}>{x[y.prop]}</TableRowColumn>
        ))}
        <TableRowColumn>
            <DeleteForeverIcon onClick={() => handleRemove(i)} />
        </TableRowColumn>
    </TableRow>
);

const TransactionsTable = ({   data,
                          header,
                          handleRemove
                      }) => {
    return (
        <Table>
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
        </Table>
    );
};

export default TransactionsTable;