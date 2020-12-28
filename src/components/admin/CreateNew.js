import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, Grid, InputLabel, MenuItem, Paper, Select, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    contaner: {
        padding: theme.spacing(3),
        spacing: theme.spacing(1),
    }
}));

const times = [
    "08:00",
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "13:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
]

const WeekMap = {
    md: 'Понедельник',
    tu: 'Вторник',
    wd: 'Среда',
    th: 'Четверг',
    fr: 'Пятница',
    st: 'Суббота',
    sd: 'Воскресенье',
}
const days = Object.keys(WeekMap);

export default function CreateNew() {
    const classes = useStyles();
    const [gofuther, setGofuther] = React.useState(false);
    const [expand, setExpand] = React.useState(false);
    const [gym, setGym] = React.useState({
        title: "",
        week_day: "",
        time: "",
        timeGroup: "",
        difficulty: "",
        vacant: 0,
        duration: 0,
        coach_id: 2,
        hall: "Зал 1",
        long_info: "«Вы молоды настолько, насколько молод Ваш позвоночник» — Дж. Пилатес. Укрепление позвоночника, коррекция осанки, улучшение работы внутренних органов – основа здорового организма и хорошего самочувствия. Движения медленные и плавные, без нагрузки на суставы.",
        short_info: "#укрепляем позвоночник #без нагрузки на суставы",
    });

    useEffect(() => {
        if (gym.week_day !== "" && gym.time !== "") {
            setGofuther(true);
        } else{
            setGofuther(false);
            setExpand(false);
        }
    }, [gym.week_day, gym.time, gym.title])

    const handleChange = (event) => {
        const name = event.target.name;
        setGym({
            ...gym,
            [name]: event.target.value,
        });
    };
    const ChangeTime = (event) => {
        setGym({
            ...gym,
            "time": event.target.value,
            "timeGroup": event.target.value,
        });
    };

    const Then = (event) => {
        setGofuther(false);
        setExpand(true);
    };

    return (
        <Grid container>
            <Grid container className={classes.contaner} alignItems="center" justify="space-between">
                <Grid item>
                    <Typography variant="h5">
                        Введите, чтобы продолжить:
                    </Typography>
                </Grid>
                <Grid item>
                    <TextField name="title" label="Название" onChange={handleChange} />
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">День недели</InputLabel>
                        <Select
                            native
                            value={gym.week_day}
                            onChange={handleChange}
                            inputProps={{
                                name: 'week_day',
                                id: 'week_day-native-simple',
                            }}
                        >
                            {(!expand)?  <option aria-label="None" value="" /> : <></>}
                            {days.map((day) => (
                                <option value={day}>{WeekMap[day]}</option>
                            ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Время</InputLabel>
                        <Select
                            native
                            value={gym.time}
                            onChange={(event) => { ChangeTime(event)}}
                            inputProps={{
                                name: 'time',
                                id: 'week_day-native-simple',
                            }}
                        >
                             {(!expand)?  <option aria-label="None" value="" /> : <></>}
                            {times.map((time) => (
                                <option value={time}>{time}</option>
                            ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                    <Button disabled={!gofuther} variant="contained" color="primary" onClick={Then}>
                        Подтвердить
                    </Button>
                </Grid>
            </Grid>
            {(expand) ?
                <Futher gym={gym} handleChange={handleChange} />
                :
                <></>
            }
        </Grid >
    )
}

const useStyles2 = makeStyles((theme) => ({
    typography: {
        align: "center"
    },
    contaner: {
        padding: theme.spacing(3),
    },
    formControl: {
        minWidth: 200,
        margin: theme.spacing(1),
    },
    root: {
        flexGrow: 1,
    },
}));

const difficulty = {
    little: "Низкая",
    middle: "Средняя",
    big: "Высокая",
}

function Futher(props) {
    const classes = useStyles2();
    const { gym, handleChange } = props;
    const [halls, setHalls] = React.useState([]);
    const [coaches, setCoaches] = React.useState([]);

    useEffect(() => {
        fetch('https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/halls')
            .then(res => res.json())
            .then(
                (result) => {
                    setHalls(result);
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
    const week = gym.week_day;
    const time = gym.time;

    let Coach_map = {};
    for (var item of coaches) {
        const isVacant = (item.busy[week].indexOf(time) > -1) ? false : true;
        Coach_map[item.id] = { name: item.name, isVacant: isVacant };
    }

    let Halls_map = {};
    for (var item2 of halls) {
        const isVacant = (item2.busy[week].indexOf(time) > -1) ? false : true;
        Halls_map[item2.hall] = { isVacant: isVacant };
    }

    return (
        <div className={classes.root}>
            <Divider />
            <Grid contaner className={classes.contaner} justify="space-between" direction="row">
                <Grid item xs={12}>
                    <Typography variant="h5" align="center">
                        Заполните следующие параметры:
                </Typography>
                </Grid>
                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Нагрузка</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gym.difficulty}
                        onChange={handleChange}
                        label="Нагрузка"
                        inputProps={{
                            name: 'difficulty',
                            id: 'week_day-native-simple',
                        }}
                    >
                        {Object.keys(difficulty).map((diff) => (
                            <MenuItem value={diff}>{difficulty[diff]}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>
                <TextField className={classes.formControl} variant="outlined" name="vacant" label="Количество мест" onChange={handleChange} />
                <TextField className={classes.formControl} variant="outlined" name="duration" label="Продолжительность (мин)" onChange={handleChange} />

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Тренер</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gym.coach_id}
                        onChange={handleChange}
                        label="Тренер"
                        inputProps={{
                            name: 'coach_id',
                            id: 'week_day-native-simple',
                        }}
                    >
                        {Object.keys(Coach_map).map((trainer) => (
                            <MenuItem value={trainer}>{Coach_map[trainer].name}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>

                <FormControl variant="outlined" className={classes.formControl}>
                    <InputLabel id="demo-simple-select-outlined-label">Помещение</InputLabel>
                    <Select
                        labelId="demo-simple-select-outlined-label"
                        id="demo-simple-select-outlined"
                        value={gym.hall}
                        onChange={handleChange}
                        label="Помещение"
                        inputProps={{
                            name: 'hall',
                            id: 'week_day-native-simple',
                        }}
                    >
                        {Object.keys(Halls_map).map((hall) => (
                            <MenuItem value={hall}>{hall}</MenuItem>
                        ))
                        }
                    </Select>
                </FormControl>

            </Grid>
        </div>
    )
}