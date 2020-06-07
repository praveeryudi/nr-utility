import Snackbar from "@material-ui/core/Snackbar/Snackbar";
import React from "react";
import MuiAlert from "@material-ui/lab/Alert/Alert";

function Alert(props) {
    return <MuiAlert elevation={6} variant="filled" {...props} />;
}

export const ShowDeleteDialog = ({ message }) => {
    return (
        <Snackbar open={true} autoHideDuration={5000}>
            <Alert severity="info">
                {message}
            </Alert>
        </Snackbar>
    )
};