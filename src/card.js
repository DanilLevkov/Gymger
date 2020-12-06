import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { Badge, Button, CardActionArea, Grid, Paper } from '@material-ui/core';

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
    }
}));


export default function GymCard(props) {
    const { lesson } = props;
    var color2;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    if (lesson.vacant > 10) {
        color2 = "primary";
    } else if (lesson.vacant > 3) {
        color2 = "error";
    } else {
        color2 = "secondary";
    }
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardActionArea>
            <Paper className={classes.root}>
                <Grid container className={classes.GridContaner}>
                    <Grid item xs={11}>
                        <Typography variant="h5" >
                            {lesson.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={0.1}>
                        <Badge
                            showZero
                            badgeContent={lesson.vacant}
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
                        <Button size="medium" variant="contained" color="secondary" >пойду</Button>
                    </div>
                </Collapse>
            </Paper>
        </CardActionArea>

    );
}
