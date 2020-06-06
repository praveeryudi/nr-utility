import React, {useEffect} from 'react';
import {connect, useDispatch} from 'react-redux';
import {fetchAllFlatData} from '../actions/maintenanceActions';
import MUIDataTable from "mui-datatables";
import {createMuiTheme, MuiThemeProvider} from '@material-ui/core/styles';

const FlatLookup = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAllFlatData());
    }, [dispatch]);

    const getMuiTheme = () => createMuiTheme({
        overrides: {

            MUIDataTableHeadCell: {
                root: {
                    fontWeight: 'bold',
                },
            },
        }
    });

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
        <MuiThemeProvider theme={getMuiTheme()}>
        <MUIDataTable
            title={"Flats List"}
            data={data}
            columns={columns}
            options={options}
        />
        </MuiThemeProvider>
    );
};

const mapStateToProps = (state) => ({
    flatData: state.maintenanceReducer.lookup,
});

export default connect(mapStateToProps, null)(FlatLookup);