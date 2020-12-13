import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import { Container, Divider, Grid, Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';

export const TheStyles = makeStyles({
    closeButton: {
        color: grey,
    },
});

export default function CustomizedDialog(props) {
    const classes = TheStyles();
    const { lesson } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <div>
        <Grid container>
            
        </Grid>
        </div>
    );
}
