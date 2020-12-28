import React, { useEffect } from 'react';
import { AppBar, Avatar, Grid, Tab, Tabs, Typography } from '@material-ui/core';
import { getCoach } from './Admin';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';


function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const TheStyles = makeStyles((theme) => ({
    avatar: {
        width: 180,
        height: 180,
    },
    cont: {
        padding: 10,
    },
    root: {
        backgroundColor: theme.palette.background.paper,
        width: 500,
    },
    DialogGrid: {
        padding: 20,
    },
    grid: {
        paddingTop: 20,
    }
}));


export default function CustomizedDialog(props) {
    const classes = TheStyles();
    const { long_info, coach_id } = props;
    const coach = getCoach(coach_id);
    const ava = (typeof coach.avatar !== "undefined") ? coach.avatar : "https://www.hausarzt-albers.de/wp-content/uploads/2016/08/no-avatar-m.jpg";
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <Grid container className={classes.DialogGrid} direction='column'>
            <Grid item container justify='flex-start' alignItems='center'>
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
            <Grid item contaner className={classes.grid}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="fullWidth"
                        aria-label="full width tabs example"
                    >
                        <Tab label="О занятии" {...a11yProps(0)} />
                        <Tab label="Об инструкторе" {...a11yProps(1)} />
                    </Tabs>
                </AppBar>
                <SwipeableViews
                    axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                    index={value}
                    onChangeIndex={handleChangeIndex}
                >
                    <TabPanel value={value} index={0} dir={theme.direction}>
                        <Typography variant="subtitle1" >
                            {long_info}
                        </Typography>
                    </TabPanel>
                    <TabPanel value={value} index={1} dir={theme.direction}>
                        <Typography variant="subtitle1" >
                            {coach.info}
                        </Typography>
                    </TabPanel>

                </SwipeableViews>
            </Grid>
        </Grid>
    );
}
