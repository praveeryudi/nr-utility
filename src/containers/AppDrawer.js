import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ReceiptIcon from '@material-ui/icons/Receipt';
import DnsIcon from '@material-ui/icons/Dns';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import AddBoxIcon from '@material-ui/icons/AddBox';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import PriorityHighIcon from '@material-ui/icons/PriorityHigh';
import HistoryOutlinedIcon from '@material-ui/icons/HistoryOutlined';
import FlatLookup from './FlatLookup';
import TxnData from './TxnData';
import NewTransactionForm from "./NewTransactionForm";
import PendingMaintenance from "../components/PendingMaintenance";
import GetTotal from "../components/GetTotal";
import PastMaintenance from "../components/PastMaintenance";
import GetBalances from "../components/GetBalances";

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));

const AppDrawer = () => {
    const classes = useStyles();

    let[selectedIndex, setSelectedIndex] = React.useState(0);

    const onMenuItemClick = (index) => {
        setSelectedIndex(index);
    };

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <Typography variant="h6" noWrap>
                        Sriven Treasury
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="left"
            >
                <div className={classes.toolbar} />
                <Divider component="div" />
                <List>
                    <ListItem button key="flatLookup" onClick={() => onMenuItemClick(0)}>
                        <ListItemIcon><DnsIcon /></ListItemIcon>
                        <ListItemText primary="Flat Lookup" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="getAllTxns" onClick={() => onMenuItemClick(1)}>
                        <ListItemIcon><ReceiptIcon /></ListItemIcon>
                        <ListItemText primary="All Transactions" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="addMaintenance" onClick={() => onMenuItemClick(2)}>
                        <ListItemIcon><AddBoxIcon /></ListItemIcon>
                        <ListItemText primary="Add Maintenance" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="getTotal" onClick={() => onMenuItemClick(3)}>
                        <ListItemIcon><GroupAddIcon /></ListItemIcon>
                        <ListItemText primary="Floor wise Total" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="pendingTxns" onClick={() => onMenuItemClick(4)}>
                        <ListItemIcon><PriorityHighIcon /></ListItemIcon>
                        <ListItemText primary="Pending Maintenance" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="getPastData" onClick={() => onMenuItemClick(5)}>
                        <ListItemIcon><HistoryOutlinedIcon /></ListItemIcon>
                        <ListItemText primary="Maintenance History" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    selectedIndex === 0 &&
                    <FlatLookup />
                }

                {
                    selectedIndex === 1 &&
                    <TxnData/>
                }

                {
                    selectedIndex === 2 &&
                    <NewTransactionForm />
                }

                {
                    selectedIndex === 3 &&
                    <GetTotal />
                }

                {
                    selectedIndex === 4 &&
                    <PendingMaintenance />
                }

                {
                    selectedIndex === 5 &&
                    <PastMaintenance />
                }

                {
                    selectedIndex === 6 &&
                    <GetBalances />
                }
            </main>




            {/* Right Side Balances Drawer */}
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} />
                <Divider component="div" />
                <List>
                    <ListItem button key="getBalances" onClick={() => onMenuItemClick(6)}>
                        <ListItemIcon><AccountBalanceIcon /></ListItemIcon>
                        <ListItemText primary="Balances" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
        </div>
    );
};

export default AppDrawer;