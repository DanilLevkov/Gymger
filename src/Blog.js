import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Paper } from '@material-ui/core';
import MyTable from './mytable'
import { makeStyles } from '@material-ui/core/styles';


const rows = [
  {
    time: '18:30',
    tu: [{
      title: "Gym2",
      hall: "Зал 1",
      time: '18:30-19:30',
      image_url: "https://source.unsplash.com/random/?science",
      short_info: "Some info2",
    },],
    th: [{
      title: "Gym2",
      hall: "Зал 1",
      time: '18:30',
      image_url: "https://source.unsplash.com/random/?science",
      short_info: "Some info2",
    },],
    st: [{
      title: "Gym2",
      hall: "Зал 1",
      time: '18:30',
      image_url: "https://source.unsplash.com/random/?science",
      short_info: "Some info2",
    },],
    sd: [{
      title: "Gym2",
      hall: "Зал 1",
      time: '18:30',
      image_url: "https://source.unsplash.com/random/?science",
      short_info: "Some info2",
    },],
    md: [
      {
        title: "Gym",
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
      },
      {
        title: "Gym2",
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },
    ],
    wd: [
      {
        title: "Gym Wen",
        hall: "Зал 1",
        time: '18:30',
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
      },
      {
        title: "Gym yuuuf",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
        time: '18:30',
      },
    ],
    fr: [
      {
        title: "Lazy",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
        time: '18:30',
      },
    ]
  },
  {
    time: '12:30',
    tu: [],
    th: [],
    st: [],
    md: [],
    sd: [
      {
        title: "Gym morning",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
        time: '12:30',
      },
      {
        title: "Gym Long Long Long name",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
        time: '12:30',
      },
    ],
    wd: [
      {
        title: "Gym Wen",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
        time: '12:30',
      },
      {
        title: "Gym yuuuf",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
        time: '12:30',
      },
    ],
    fr: [
      {
        title: "Lazy",
        hall: "Зал 1",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
        time: '12:30',
      },
    ]
  },
  {
    time: '14:30',
    st: [],
    sd: [],
    md: [
      {
        title: "Gym morning",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
        time: '14:30',
      },
      {
        title: "Gym2",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
        time: '14:30',
      },
    ],
    wd: [
      {
        title: "Gym Wen",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
        time: '14:30',
      },
      {
        title: "Gym yuuuf",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
        time: '14:30',
      },
    ],
    fr: [
      {
        title: "Lazy",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
        time: '14:30',
      },
    ]
  },
];

//Сортировка
rows.sort((a, b) => a.time > b.time);


const GridStyles = makeStyles({
  headContaner: {
    maxWidth: '100%',
    height: "100px"
  },
  mainContaner: {
    padding: "0"
  },
  paper: {
    width: "1300px",
  },
});

export default function Blog() {
  const classes = GridStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.headContaner}>
        <Header />
      </Container>
      <Container className={classes.mainContaner}>
        <Paper elevation="3" className={classes.paper}>
          <Grid container spacing={2} direction="column" justify="flex-start" alignItems="center">
            <Grid item >
              <Sidebar />
            </Grid>
            <Grid item>
              <MyTable rows={rows} />
            </Grid>
          </Grid>
        </Paper>
      </Container>

      <Paper width="100%">
        Some add info
    </Paper>
    </React.Fragment>
  );
}
