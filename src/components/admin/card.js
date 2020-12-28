import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';
import { Badge, Button, CardActionArea, Dialog, Divider, Grid, Paper } from '@material-ui/core';
import CustomizedDialog from './CustomizedDialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { grey } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 161,
        padding: 8,
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    badge: {
        top: -10,
        right: 5,
        padding: '0 4px',
    },
    GridContaner: {
        width: "110%",
    },
    closeButton: {
        color: grey,
    },
    DialogGrid: {
        padding: 20,
    },

}));





export default function GymCard(props) {
    const { lesson, isLogged } = props;
    var color2;
    const classes = useStyles();
    const [dialodOpen, setDialod] = React.useState(false);
    const UserClicked = localStorage[lesson.id] !== undefined;
    const [clicked, setClicked] = React.useState(UserClicked);
    const isVacant = (typeof lesson['vacant'] !== "undefined") ? true : false;
    const [vacant, setVacant] = React.useState(lesson.vacant);
    const [deleted, setDel] = React.useState(false);

    function updateItem(_id, _title, _value) {
        fetch("https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/Mynewupdate", {
            method: 'POST',
            body: JSON.stringify({ ID: _id, title: _title, value: _value })
        }).then(res => res.json())
            .then(
                (result) => {
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    alert(error);
                }
            );
    }

    function onButtom(event) {
        event.stopPropagation();
        updateItem(lesson.id, lesson.title, vacant - 1);
        localStorage.setItem(lesson.id, true);
        setVacant(vacant - 1);
        setClicked(true);
    }
    function offButtom(event) {
        event.stopPropagation();
        updateItem(lesson.id, lesson.title, vacant + 1);
        localStorage.removeItem(lesson.id);
        setVacant(vacant + 1);
        setClicked(false);
    }
    function changeButtom() {
        if (!isLogged) {
            return null;
        }
        if (!isVacant) {
            return null;
        }
        if (clicked) {
            return (
                <Button onClick={offButtom} size="medium" variant="contained" color="primary" >не смогу</Button>
            )
        } else {
            if (vacant > 0) {
                return (
                    <Button onClick={onButtom} size="medium" variant="contained" color="secondary" >пойду</Button>
                )
            } else {
                return (
                    <Button disabled onClick={onButtom} size="medium" variant="contained" color="secondary" >пойду</Button>
                )
            }
        }
    }
    if (lesson.vacant > 10) {
        color2 = "primary";
    } else if (lesson.vacant > 3) {
        color2 = "error";
    } else {
        color2 = "secondary";
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = (event) => {
        event.stopPropagation();
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const DeleteItem = () => {
        fetch("https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/del", {
            method: 'DELETE',
            body: JSON.stringify({ ID: lesson.id, title: lesson.title, coach: lesson.coach, hall: lesson.hall, weekday: lesson.weekday, time: lesson.time})
        }).then(res => res.json())
            .then(
                (result) => {
                },
                // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
                // чтобы не перехватывать исключения из ошибок в самих компонентах.
                (error) => {
                    alert(error);
                }
            );
            setOpen(false);
            setDel(true);
    }

    if (deleted){
        return null;
    }

    return (
        <div>
            <CardActionArea style={{ zIndex: 1 }} onClick={() => setDialod(true)}>
                <Paper className={classes.root} >
                    <Grid container className={classes.GridContaner}>
                        <Grid item xs={11}>
                            <Typography variant="h5" >
                                {lesson.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={1}>
                            <Badge
                                showZero
                                badgeContent={vacant}
                                color={color2}
                                className={classes.badge}>
                            </Badge>
                        </Grid>
                    </Grid>
                    <Grid container>
                        <Grid item xs={8}>
                            <Typography variant="h7" color="textSecondary">
                                {lesson.time}
                            </Typography>
                            <Typography variant="body1" color="textPrimary" component="p">
                                {lesson.hall}
                            </Typography>
                        </Grid>

                        <Grid item xs={4}>
                            <IconButton
                                onClick={handleClickOpen}
                                aria-label="show more"
                            >
                                <DeleteIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Paper>
            </CardActionArea>

            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Вы уверены, что хотите удалить занятие?"}</DialogTitle>
                <DialogActions>
                    <Button onClick={DeleteItem} color="primary">
                        Да
                    </Button>
                    <Button onClick={handleClose} color="primary" autoFocus>
                        Отмена
                    </Button>
                </DialogActions>
            </Dialog>



            <Dialog
                scroll='body'
                open={dialodOpen}
                onClose={() => setDialod(false)}
                maxWidth={800}
            >
                <MuiDialogContent style={{ paddingTop: 0, padding: 0, minWidth: 600, maxWidth: 800 }}>
                    <Grid container className={classes.DialogGrid} spacing={0}>
                        <Grid item container xs={12} justify='space-between' >
                            <Grid item xs={10}>
                                <Typography variant="h4" noWrap >
                                    {lesson.title}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <IconButton aria-label="close" className={classes.closeButton} onClick={() => setDialod(false)}>
                                    <CloseIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        <Grid item container xs={12} alignItems='center' justify='space-between'  >
                            <Grid item xs={4} direction='column'>
                                <Typography variant="h5" >
                                    {lesson.type}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Нагрузка: {(lesson.difficulty === "little") ? "низкая" : (lesson.difficulty === "middle") ? "средняя" : "высокая"}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Свободных мест: {lesson.vacant}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Продолжительность: {lesson.duration} мин
                                </Typography>
                            </Grid>

                            <Grid item container xs={4} direction='row' alignItems='center' justify='center' >
                                <PlaceIcon medium />
                                <Typography variant="h5" >
                                    {lesson.hall}
                                </Typography>
                            </Grid>
                            <Grid item container xs={4} direction='row' alignItems='center' justify='flex-end' >
                                <ScheduleIcon medium />
                                <Typography variant="h5" >
                                    {lesson.time}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <CustomizedDialog long_info={lesson.long_info} coach_id={lesson.coach_id}></CustomizedDialog>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}
