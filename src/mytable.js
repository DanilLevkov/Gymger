import React, { useEffect } from 'react';
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


const columns = getColumns();
function Parsing(elements) {
    var rows = {};
    //Parsing
    for (const elem of elements) {
        const val = rows[elem.timeGroup];
        if (val === undefined) {
            rows[elem.timeGroup] = {};
            rows[elem.timeGroup][elem.week_day] = [elem];
        } else {
            if (elem.week_day in rows[elem.timeGroup]) {
                rows[elem.timeGroup][elem.week_day].push(elem);
            } else{
                rows[elem.timeGroup][elem.week_day] = [elem];
            }
        }
    }
    return rows;
}


const gyms = getGyms();

function CellFill(props) {
    const { event } = props;
    if (props.stateDifficulty[event.difficulty] === true) {
        if ((props.personName.length === 0) || (props.personName.indexOf(event.title) > -1)) {
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
    const { row, time } = props;
    return (
        <React.Fragment>
            <TableRow>
                <TableCell component="th" scope="row" width="30px">
                    {time}
                </TableCell>

                {columns.map((column) => {
                    return (
                        <TableCell key={column.id} className={classes.root} >
                            { column.id in row ? <CellContent cell={row[column.id]} stateDifficulty={props.stateDifficulty} personName={props.personName} /> : <CellContent cell={[{}]} stateDifficulty={props.stateDifficulty} personName={props.personName} />}
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

var coaches = [];
function setCoaches(tmp){
    coaches = tmp;
}
export function getCoach(id) {
    for (var item of coaches){
        if (item.id === id){
            return item;
        }
    }
}



export default function MyTable() {
    const classes2 = TableStyles();
    const classes = useStyles();
    const [personName, setPersonName] = React.useState([]);
    const [elements, setelements] = React.useState([]);
    const [stateDifficulty, setState] = React.useState({
        little: true,
        middle: true,
        big: true,
    });

    useEffect(() => {
        fetch('https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/MyStage')
            .then(res => res.json())
            .then(
                (result) => {
                    setelements(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    alert(error);
                }
            )
        
            fetch('https://78qhmysrfl.execute-api.us-east-1.amazonaws.com/wev')
            .then(res => res.json())
            .then(
                (result) => {
                    setCoaches(result);
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    alert(error);
                }
            )

    }, [])


    
    const rows = Parsing(elements);
    const times = Object.keys(rows).sort();
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
                            control={<Checkbox checked={stateDifficulty.little} onChange={changesDifficulty} name="little" />}
                            label="Легкий"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Checkbox checked={stateDifficulty.middle} onChange={changesDifficulty} name="middle" />}
                            label="Средний"
                        />
                    </Grid>
                    <Grid item xs={4}>
                        <FormControlLabel
                            control={<Checkbox checked={stateDifficulty.big} onChange={changesDifficulty} name="big" />}
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
                                <HeadofTable style={{ ...style, zIndex: 100 }} columns={columns} />
                            )}
                        </Sticky>
                        <TableBody>
                            {times.map((time) => (
                                <Row row={rows[time]} time={time} stateDifficulty={stateDifficulty} personName={personName} />
                            ))}
                        </TableBody>
                    </StickyContainer>
                </Table>
            </TableContainer>
        </Grid>
    );
}
