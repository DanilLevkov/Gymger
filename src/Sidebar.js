import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Divider, FormControl, FormGroup, Input, InputLabel, ListItemText, ListSubheader, MenuItem, Select } from '@material-ui/core';

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
    margin: theme.spacing(1),
    minWidth: 320, // Ширина коробочки ввода
    maxWidth: 1000,
  },
}));

const ITEM_HEIGHT = 100; // высота выпадающего списка
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300
    }
  }
};


export default function Sidebar() {
  const classes = useStyles();

  const [state2, setState] = React.useState({
    checkedLittle: true,
    checkedMiddle: true,
    checkedBig: true,
  });

  const setDifficulty = (event) => {
    setState(event.target.value);
  };


  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    if (event.target.value.indexOf("exit") > -1){
      setPersonName([]);
    }
    else{
      setPersonName(event.target.value);
    }
  };

  const whenClose = (event) => {
    alert(personName); // Вот так передадим наверх  personName.indexOf(elem.name) > -1 - проверка принадлежности
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
          <Select
            labelId="demo-mutiple-checkbox-label"
            id="demo-mutiple-checkbox"
            multiple
            value={personName}
            onChange={handleChange}
            onClose={whenClose}
            input={<Input />}
            renderValue={(selected) => selected.join(", ")}
            MenuProps={MenuProps}
          >
            <MenuItem value="exit">
              <em>Все занятия</em>
            </MenuItem>
            < ListSubheader disableSticky> {gyms[0].type}</ListSubheader>
            {gyms[0].items.map((elem) => (
              <MenuItem key={elem} value={elem.name} >
              <Checkbox checked={(personName.indexOf(elem.name) > -1)} />
              <ListItemText primary={elem.name} />
              </MenuItem>
            ))}
            < ListSubheader disableSticky> {gyms[1].type}</ListSubheader>
            {gyms[1].items.map((elem) => (
              <MenuItem key={elem} value={elem.name}>
              <Checkbox checked={personName.indexOf(elem.name) > -1} />
              <ListItemText primary={elem.name} />
              </MenuItem>
            ))}

            < ListSubheader disableSticky> {gyms[2].type}</ListSubheader>
            {gyms[2].items.map((elem) => (
              <MenuItem key={elem} value={elem.name}>
              <Checkbox checked={personName.indexOf(elem.name) > -1} />
              <ListItemText primary={elem.name} />
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
    </Grid >
    
  );
}
