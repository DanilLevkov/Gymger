import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Badge, Box, Button, Card, CardActionArea, CardContent, CardMedia, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Divider, Grid, Paper } from '@material-ui/core';
import { cangeVacant } from './data';
import CustomizedDialog from './CustomizedDialog';
import MuiDialogContent from '@material-ui/core/DialogContent';
import { grey } from '@material-ui/core/colors';
import CloseIcon from '@material-ui/icons/Close';
import PlaceIcon from '@material-ui/icons/Place';
import ScheduleIcon from '@material-ui/icons/Schedule';

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
        /*  position: "relative", */
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
    const { lesson } = props;
    var color2;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const [dialodOpen, setDialod] = React.useState(false);
    const [clicked, setClicked] = React.useState(false);
    const [vacant, setVacant] = React.useState(lesson.vacant);
    function onButtom(event) {
        event.stopPropagation();
        setVacant(vacant - 1);
        setClicked(true);
        cangeVacant(lesson.id, -1); // Изменение количества вакантных мест
    }
    function offButtom(event) {
        event.stopPropagation();
        setVacant(vacant + 1);
        setClicked(false);
        cangeVacant(lesson.id, 1);
    }
    function changeButtom() {
        if (clicked) {
            return (
                <Button onClick={offButtom} size="medium" variant="contained" color="primary" >не смогу</Button>
            )
        } else {
            if (vacant > 0) {
                return (
                    //(prev) => setVacant(prev + 1)
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
    const handleExpandClick = (event) => {
        event.stopPropagation();
        setExpanded(!expanded);
    };

    return (
        <div>
            <CardActionArea onClick={() => setDialod(true)}>
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
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={handleExpandClick}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Collapse in={expanded} timeout="auto" unmountOnExit>
                        <Typography paragraph>
                            {lesson.short_info}
                        </Typography>
                        <div style={{ margin: 10 }}>
                            {changeButtom()}
                        </div>
                    </Collapse>
                </Paper>
            </CardActionArea>

            <Dialog
                scroll='body'
                open={dialodOpen}
                onClose={() => setDialod(false)}
                maxWidth={800}
            >
                <MuiDialogContent style={{ paddingTop: 0, padding: 0, minWidth: 600 }}>
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
                            <Grid item xs={6} direction='column'>
                                <Typography variant="h5" >
                                    {lesson.type}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Нагрузка: {lesson.difficulty}
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Продолжительность: {lesson.duration} мин
                                </Typography>
                                <Typography variant="subtitle1" >
                                    Свободных мест: {lesson.vacant}
                                </Typography>
                            </Grid>

                            <Grid item container xs={3} direction='row' alignItems='center' justify='center' >
                                <PlaceIcon medium />
                                <Typography variant="h5" >
                                    {lesson.hall}
                                </Typography>
                            </Grid>
                            <Grid item container xs={3} direction='row' alignItems='center' justify='flex-end' >
                                <ScheduleIcon medium />
                                <Typography variant="h5" >
                                    {lesson.time}
                                </Typography>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Divider />
                    <CustomizedDialog></CustomizedDialog>
                </MuiDialogContent>
            </Dialog>
        </div>
    );
}
