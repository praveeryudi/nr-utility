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
import PeopleIcon from '@material-ui/icons/People';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import MoneyIcon from '@material-ui/icons/Money';
import DnsIcon from '@material-ui/icons/Dns';
import AddNewEmployeeForm from "../modules/addEmployee/AddNewEmployeeForm";
//import NewExpenseForm from "../containers/NewExpenseForm";
import EmployeesList from "./EmployeesList";
import FlatLookup from './FlatLookup';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginLeft: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
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
                        elite HR System
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
                    <ListItem button key="allEmployees" onClick={() => onMenuItemClick(0)}>
                        <ListItemIcon><PeopleIcon /></ListItemIcon>
                        <ListItemText primary="All Employees" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="addEmployee" onClick={() => onMenuItemClick(1)}>
                        <ListItemIcon><PersonAddIcon /></ListItemIcon>
                        <ListItemText primary="Add Employee" />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key="addExpense" onClick={() => onMenuItemClick(2)}>
                        <ListItemIcon><DnsIcon /></ListItemIcon>
                        <ListItemText primary="Flat Lookup" />
                    </ListItem>
                </List>
                <Divider />
            </Drawer>
            <main className={classes.content}>
                <div className={classes.toolbar} />
                {
                    selectedIndex === 0 &&
                    <EmployeesList />
                }

                {
                    selectedIndex === 1 &&
                    <AddNewEmployeeForm />
                }

                {
                    selectedIndex === 2 &&
                    <FlatLookup />
                }
            </main>
        </div>
    );
};

export default AppDrawer;