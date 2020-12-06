import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { CardActionArea, Grid, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
        width: 156,
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
}));

export default function GymCard(props) {
    const { lesson } = props;
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <CardActionArea>
            <Paper className={classes.root}>
                <Typography variant="h5" >
                    {lesson.title}
                </Typography>
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
                    <Typography paragraph>
                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                        minutes.
                    </Typography>
                </Collapse>
            </Paper>
        </CardActionArea>

    );
}
