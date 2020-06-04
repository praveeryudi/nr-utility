import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchAllFlatData} from '../actions/maintenanceActions';
import MUIDataTable from "mui-datatables";

const FlatLookup = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllFlatData());
    }, [dispatch]);

    const data = props.flatData;
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
            name: "ownerName",
            label: "Owner Name",
            options: {
                filter: true,
                sort: true,
            }
        },
        {
            name: "expectedMaintenance",
            label: "Fixed Maintenance",
            options: {
                filter: true,
                sort: true,
            }
        },
    ];

    const options = {
        filter: true,
        filterType: 'dropdown',
        responsive: 'scrollMaxHeight',
        rowsPerPage: 15,
        jsonMode: true,
        selectableRows: 'none',
        fixedHeaderOptions: {
            xAxis: false,
            yAxis: true
        },
    };

    return (
        <MUIDataTable
            title={"Flats List"}
            data={data}
            columns={columns}
            options={options}
        />
    );
};

const mapStateToProps = (state) => ({
    flatData: state.maintenanceReducer.lookup,
});

export default connect(mapStateToProps, null)(FlatLookup);