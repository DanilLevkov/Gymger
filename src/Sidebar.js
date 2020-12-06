import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));


export default function Sidebar() {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={12}>
      <Paper elevation={4} className={classes.sidebarAboutBox}>
        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Очное"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Дистанционное"
        />
        </Grid>

        </Grid>
        </form>
     
     </Paper>  
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
