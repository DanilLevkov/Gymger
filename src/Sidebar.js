import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, FormControl, FormGroup, InputLabel, ListSubheader, MenuItem, Select } from '@material-ui/core';

const gyms = [
  {
    type: 'Strong',
  },
];






const useStyles = makeStyles((theme) => ({
  contaner: {
    padding: "20px",
  },
  formControl: {
    minWidth: 220,
  },
}));


export default function Sidebar() {
  const classes = useStyles();

  const [state, setState] = React.useState({
    checkedPower: true,
    checkedStratch: true,
    checkedPool: true,
  });


  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container direction={"row"} justify={"space-around"} alignItems={"center"} className={classes.contaner}>
      <Grid item container xs={4}>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state.checkedPower} onChange={handleChange} name="checkedPower" />}
            label="Силовые"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state.checkedStratch} onChange={handleChange} name="checkedStratch" />}
            label="Растяжка"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state.checkedPool} onChange={handleChange} name="checkedPool" />}
            label="Бассейн"
          />
        </Grid>
      </Grid>

      <Grid item xs={4}>
      <FormControl className={classes.formControl}>
        <InputLabel htmlFor="grouped-select">Тренеровки</InputLabel>
        <Select defaultValue="" id="grouped-select">
          <MenuItem value="">
            <em>Все</em>
          </MenuItem>
          <ListSubheader>Силовые</ListSubheader>
          <MenuItem value={1}>Option 1</MenuItem>
          <MenuItem value={2}>Option 2</MenuItem>
          <ListSubheader>Растяжка</ListSubheader>
          <ListSubheader>Бассейн</ListSubheader>
          <MenuItem value={3}>Option 3</MenuItem>
          <MenuItem value={4}>Option 4</MenuItem>
        </Select>
      </FormControl>
      </Grid>
      {/* <Grid item xs={4}>
       
      </Grid> */}
    </Grid>
  );
}
