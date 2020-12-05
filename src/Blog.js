import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid } from '@material-ui/core';
import MyTable from './mytable'

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



export default function Blog() {

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
