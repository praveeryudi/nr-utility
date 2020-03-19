import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: 200,
        },
    },
}));

const LastNameField = field  => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <TextField {...field.input}
                       label={field.label}
                       name={field.name}
            />
        </div>
    );
};

export default LastNameField;