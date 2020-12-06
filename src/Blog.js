import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import Sidebar from './Sidebar';
import { Grid, Paper } from '@material-ui/core';
import MyTable from './mytable'
import { makeStyles } from '@material-ui/core/styles';
import {rows} from './data'


//Сортировка
const rows2=rows.sort((a, b) => a.time > b.time);


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
              <MyTable rows={rows2} />
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
