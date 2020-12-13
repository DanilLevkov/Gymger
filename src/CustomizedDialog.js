import React from 'react';
import { Avatar, Grid,Typography } from '@material-ui/core';
import { getCoach } from './data';
import { makeStyles } from '@material-ui/core/styles';

const TheStyles = makeStyles((theme) => ({
    avatar: {
        width: 180,
        height: 180,
    },
    cont: {
        padding: 10,
    },
}));


export default function CustomizedDialog(props) {
    const classes = TheStyles();
    const { long_info, coach_id } = props;
    const coach = getCoach(coach_id);
    const ava = (typeof coach['avatar'] !== "undefined") ? coach.avatar : "https://www.hausarzt-albers.de/wp-content/uploads/2016/08/no-avatar-m.jpg";

    return (
            <Grid item xs={12} container justify='flex-start' alignItems='center'>
                <Grid item xs={4} container className={classes.cont} >
                    <Avatar big src={ava} className={classes.avatar} />
                </Grid>
                <Grid item container xs={8} direction='column'>

                    <Typography variant="h5" >
                        {coach.name}
                    </Typography>
                    <Typography variant="subtitle1" >
                        Категория: {coach.categ}
                    </Typography>
                    <Typography variant="subtitle1" >
                        Стаж: {coach.experience}
                    </Typography>
                </Grid>
            </Grid>
    );
}
