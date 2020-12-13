import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import GymCard from './card';
import { HeadofTable } from "./tableHead";
import { StickyContainer, Sticky } from 'react-sticky';
import { getColumns, getGyms, getRows } from './data'
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { FormControl, Input, InputLabel, ListItemText, ListSubheader, MenuItem, Select } from '@material-ui/core';


//Сортировка
const rows = getRows();
const rows2 = rows.sort(function(a,b){ 
    if (a.time > b.time) {
        return 1;
      }
      if (a.time < b.time) {
        return -1;
      }
      // a должно быть равным b
      return 0;
  });
const columns = getColumns();
const gyms = getGyms();

function CellFill(props) {
    const { event } = props;
    if (props.stateDifficulty[event.difficulty] === true) {
        if ((props.personName.length === 0) ||  (props.personName.indexOf(event.type) > -1)) {
            return (
                <Grid item alignContent="center">
                    <GymCard lesson={event} />
                </Grid>
            )
        } else {
            return (
                <Grid item alignContent="center">
                    <div dar={event} style={{ width: "161px" }}> </div>
                </Grid>
            )
        }
    }
    else {
        return (
            <Grid item alignContent="center">
                <div dar={event} style={{ width: "161px" }}> </div>
            </Grid>
        )
    }
}



function CellContent(props) {
    const { cell } = props;
    return (
        <React.Fragment>
            <Grid container direction="column" justify="flex-start" alignItems="center" spacing={1} padding={3}>
                {cell.map((event) => (
                    <CellFill event={event} stateDifficulty={props.stateDifficulty} personName={props.personName} />
                ))}
            </Grid>
        </React.Fragment>
    );
}


const CellStyles = makeStyles({
    root: {
        verticalAlign: "top",
        padding: 8,
        paddingLeft: 0,
        scrollPaddingRight: 0,
    },
});

function Row(props) {
    const classes = CellStyles();
    const { row } = props;
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row" width="30px">
                    {row.time}
                </TableCell>

                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} className={classes.root} >
                            {typeof value === 'object' ? <CellContent cell={value} stateDifficulty={props.stateDifficulty} personName={props.personName} /> : ''}
                        </TableCell>
                    );
                })}

            </TableRow>
        </React.Fragment >
    );
}


const TableStyles = makeStyles({
    container: {
        width: "1260px"
    },
    table: {

    }
});



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



export default function MyTable() {
    const classes2 = TableStyles();
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);
    const [stateDifficulty, setState] = React.useState({
        checkedLittle: true,
        checkedMiddle: true,
        checkedBig: true,
    });

    const changesDifficulty = (event) => {
        setState({ ...stateDifficulty, [event.target.name]: event.target.checked });
    };

    const handleChange = (event) => {
        if (event.target.value.indexOf("exit") > -1) {
            setPersonName([]);
        }
        else {
            setPersonName(event.target.value);
        }
    };


    return (
        <Grid container direction="column" justify="flex-start" alignItems="center">
            <Grid container direction={"row"} justify={"space-around"} alignItems={"center"} className={classes.contaner}>
                <Grid item container justify={"space-around"} xs={4}>
                    <Grid item container justify={'center'} xs={12}>
                        <Typography variant="h5">
                            Уровень нагрузки:
                        </Typography>
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Checkbox checked={stateDifficulty.checkedLittle} onChange={changesDifficulty} name="checkedLittle" />}
                            label="Легкий"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Checkbox checked={stateDifficulty.checkedMiddle} onChange={changesDifficulty} name="checkedMiddle" />}
                            label="Средний"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Checkbox checked={stateDifficulty.checkedBig} onChange={changesDifficulty} name="checkedBig" />}
                            label="Тяжёлый"
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

            <TableContainer className={classes2.container}>
                <Table stickyHeader aria-label="sticky table" className={classes2.table}>
                    <StickyContainer className="container">
                        <Sticky>
                            {({ style }) => (
                                <HeadofTable style={{...style, zIndex: 100}} columns={columns} />
                            )}
                        </Sticky>
                        <TableBody>
                            {rows2.map((row) => (
                                <Row row={row}  stateDifficulty={stateDifficulty} personName={personName} />
                            ))}
                        </TableBody>
                    </StickyContainer>
                </Table>
            </TableContainer>
        </Grid>
    );
}
