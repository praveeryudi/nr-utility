import React from 'react';
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    button: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
    },
}));


const SaveTxnButton = (props) => {

    const classes = useStyles();

    const saveTxn = () => {
        props.passAction();
    };

    return (
        <Button
            variant="contained"
            color="primary"
            onClick={saveTxn}
            className={classes.button}
        >
            Save
        </Button>
    )
};

export default SaveTxnButton;