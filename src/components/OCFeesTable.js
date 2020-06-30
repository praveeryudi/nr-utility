import React from 'react';
import ReactTable from "react-table-6";
import "react-table-6/react-table.css";

const OCFeesTable = ({columns, data}) => {

    return (
        <ReactTable
            data={data}
            columns={columns}
            defaultPageSize = {5}
            pageSizeOptions = {[5, 10, 20]}
        />
    );
};

export default OCFeesTable;