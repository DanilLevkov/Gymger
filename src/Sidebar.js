import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, FormControl, FormGroup, InputLabel, ListItemText, ListSubheader, MenuItem, Select } from '@material-ui/core';

const gyms = [
  {
    type: 'Растяжка',
    items: [
      { name: "Йога", isChecked: true },
      { name: "Пилатес", isChecked: true },
      { name: "Бентч", isChecked: true },
    ]
  },
  {
    type: 'Силовые',
    items: [
      { name: "Hot Iron", isChecked: true },
      { name: "Crossfet", isChecked: true },
      { name: "Math Ball", isChecked: true },
    ]
  },
  {
    type: 'Бассейн',
    items: [
      { name: "Водные процедуры", isChecked: true },
      { name: "Ныряние", isChecked: true },
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
function SetAll(bol) {
  for (var prop of gyms) {
    for (var item of prop.items) {
      item.isChecked = bol;
    }
  }
}
/* function SetAllFalse() {
  for (var prop of gyms) {
    for (var item of prop.items) {
      item.isChecked = false;
    }
  }
} */
function SetItem(type, name, bol) {
  for (var i of gyms) {
    if (i.type === type) {
      for (var x of i.items) {
        if (x.name === name) {
          x.isChecked = bol;
        }
      }
    }
  }
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
    SetAll(true);
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
          <Select defaultValue="" id="grouped-select" renderValue='' >
            <MenuItem value="" onClick={onAll}>
              <em>Все</em>
            </MenuItem>


            < ListSubheader > {gyms[0].type}</ListSubheader>
            {gyms[0].items.map((elem) => (
              <MenuItem key={elem} value={elem}>
                {elem.name}
              </MenuItem>
            ))}
            < ListSubheader > {gyms[1].type}</ListSubheader>
            {gyms[1].items.map((elem) => (
              <MenuItem key={elem} value={elem}>
                 {elem.name}
              </MenuItem>
            ))}

            < ListSubheader > {gyms[2].type}</ListSubheader>
            {gyms[2].items.map((elem) => (
              <MenuItem key={elem} value=''>
                 {elem.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid >
  );
}
