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
    id: 1,
    type: 'Power',
    items: [
      { name: "Йога", isChecked: true }
    ]
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
function SetCheckedGym() {

}


export default function Sidebar() {
  const classes = useStyles();
  const [stateall, setState2] = React.useState({
    allChecked: true,
  });
  const [state2, setState] = React.useState({
    checkedLittle: true,
    checkedMiddle: true,
    checkedBig: true,
  });
  const onAll = () => {
    setState2({ ...stateall, allChecked: true });
  };
  const offAll = () => {
    setState2({ ...stateall, allChecked: false });
  };


  const handleChange = (event) => {
    setState({ ...state2, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container direction={"row"} justify={"space-around"} alignItems={"center"} className={classes.contaner}>
      <Grid item container justify={"space-around"} xs={4}>
        <Grid item container justify={'center'} xs={12}>
          <Typography variant="h5">
            Уровень нагрузки:
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state2.checkedLittle} onChange={handleChange} name="checkedLittle" />}
            label="Легкий"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state2.checkedMiddle} onChange={handleChange} name="checkedMiddle" />}
            label="Средний"
          />
        </Grid>
        <Grid item xs={4}>
          <FormControlLabel
            control={<Checkbox checked={state2.checkedBig} onChange={handleChange} name="checkedBig" />}
            label="Большой"
          />
        </Grid>
      </Grid>

      <Grid item xs={4}>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor="grouped-select">Тренеровки</InputLabel>
          <Select defaultValue="" id="grouped-select">
            <MenuItem value="" onClick={onAll}>
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
