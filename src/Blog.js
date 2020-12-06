import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid } from '@material-ui/core';
import MyTable from './mytable'
import { makeStyles } from '@material-ui/core/styles';

const sections = [
  { title: 'Конференции', url: '#' },
  { title: 'Хакатоны', url: '#' },
  { title: 'Вебинары', url: '#' },
  { title: 'Форумы', url: '#' },
  { title: 'Онлайн-курсы', url: '#' },
  { title: 'Стажировки', url: '#' },
  { title: 'Семинары', url: '#' },
  { title: 'Лекции', url: '#' },
];


const rows = [
  {
    time: '18:30',
    tu: [],
    th: [],
    st: [],
    sd: [],
    md: [
      {
        tiltle: "Gym",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
      },
      {
        tiltle: "Gym2",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },
    ],
    wd: [
      {
        tiltle: "Gym Wen",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
      },
      {
        tiltle: "Gym yuuuf",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
      },
    ],
    fr: [
      {
        tiltle: "Lazy",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
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
        tiltle: "Gym morning",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
      },
      {
        tiltle: "Gym2",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },
    ],
    wd: [
      {
        tiltle: "Gym Wen",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
      },
      {
        tiltle: "Gym yuuuf",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
      },
    ],
    fr: [
      {
        tiltle: "Lazy",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
      },
    ]
  },
  {
    time: '14:30',
    st: [],
    sd: [],
    md: [
      {
        tiltle: "Gym morning",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info",
      },
      {
        tiltle: "Gym2",
        image_url: "https://source.unsplash.com/random/?science",
        short_info: "Some info2",
      },
    ],
    wd: [
      {
        tiltle: "Gym Wen",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info",
      },
      {
        tiltle: "Gym yuuuf",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info2",
      },
    ],
    fr: [
      {
        tiltle: "Lazy",
        image_url: "https://source.unsplash.com/random/?computer",
        short_info: "Some info lazy",
      },
    ]
  },
];

//Сортировка
rows.sort((a, b) => a.time > b.time);


const GridStyles = makeStyles({
  grid: {
      width: '100%',
      padding: 10,
  },
  container: {
      maxHeight: '100%',
  },
});

export default function Blog() {
  const classes = GridStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header sections={sections} />
        <Grid container xs={6} sm={12} md={12}>
          <Sidebar date={"fgf"} format={"fgbfn"} where={"mk"} price={"kjbjh"} time={"jhbjh"} />
        </Grid>
        <MyTable rows={rows} />
      </Container>
    </React.Fragment>
  );
}
