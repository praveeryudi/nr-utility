import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import axios from "axios";
import * as Urls from "../ApiConstants";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));

const GetBalances = ()=> {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const [flats, setFlats] = React.useState([]);
    const [balances, setBalances] = React.useState([]);

    useEffect(() => {
        const getBalances = async() => {
            await axios.get(Urls.GET_BALANCES)
                .then(res => {
                    const result = res.data;
                    console.log(result);
                    setFlats(() => Object.keys(result));
                    setBalances(() => Object.values(result));
                })
                .catch(function(error) {
                    console.error("Error in fetching balances", error);
                })

        };
        getBalances();
    }, []);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className={classes.root}>
            <h1>Showing balances</h1>
            {
                flats.map((flat,index) =>
                        <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                        <ExpansionPanelSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1bh-content"
                            id="panel1bh-header"
                        >
                            <Typography className={classes.heading}>{flats[index]}</Typography>
                            <Typography className={classes.secondaryHeading}>{balances[index]}</Typography>
                        </ExpansionPanelSummary>
                        <ExpansionPanelDetails>
                            <Button variant="contained" color="primary">
                                Adjust From Balance
                            </Button>
                        </ExpansionPanelDetails>
                </ExpansionPanel>
                )
            }
        </div>
    );
};

export default GetBalances;