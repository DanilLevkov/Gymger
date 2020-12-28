import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Divider, FormControl, Grid, InputLabel, Paper, Select, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    contaner: {
        padding: theme.spacing(2),
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
    const [gym, setGym] = React.useState({
        week_day: "",
        time: "",
        timeGroup: "",
        coach_id: 2,
        difficulty: "middle",
        duration: 55,
        hall: "Зал 1",
        long_info: "«Вы молоды настолько, насколько молод Ваш позвоночник» — Дж. Пилатес. Укрепление позвоночника, коррекция осанки, улучшение работы внутренних органов – основа здорового организма и хорошего самочувствия. Движения медленные и плавные, без нагрузки на суставы.",
        short_info: "#укрепляем позвоночник #без нагрузки на суставы",
        title: " Pilates",
        vacant: 11,
    });

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
        setGofuther(false);
    };

    const Then = (event) => {
        setGofuther(true);
    };

    return (
        <Container className={classes.contaner}>
            <Grid container alignItems="center" justify="space-between">
                <Grid item>
                    <Typography>
                        Установите день недели и время:
                    </Typography>
                </Grid>
                <Grid item>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">День недели</InputLabel>
                        <Select
                            native
                            value={gym.week_day}
                            onChange={(event) => {handleChange(event); setGofuther(false);}}
                            inputProps={{
                                name: 'week_day',
                                id: 'week_day-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            {days.map((day) => (
                                <option value={day}>{WeekMap[day]}</option>
                            ))
                            }
                        </Select>
                    </FormControl>
                    <FormControl className={classes.formControl}>
                        <InputLabel htmlFor="age-native-simple">Время</InputLabel>
                        <Select
                            native
                            value={gym.time}
                            onChange={ChangeTime}
                            inputProps={{
                                name: 'time',
                                id: 'week_day-native-simple',
                            }}
                        >
                            <option aria-label="None" value="" />
                            {times.map((time) => (
                                <option value={time}>{time}</option>
                            ))
                            }
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item>
                        <Button disabled={gofuther} variant="contained" color="primary" onClick={Then}>
                            Подтвердить
                        </Button>
                </Grid>
            </Grid>
            {(gofuther) ?
                <>
                <Divider/>
                <Futher gym={gym} setGym={setGym} />
                </>
                :
                <></>
            }
        </Container>
    )
}

function Futher(props) {
    const {gym, setGym} = props;
    return(
        <Grid contaner>
            
        </Grid>
    )
}