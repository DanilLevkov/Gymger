import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import { Grid, Paper } from '@material-ui/core';
import MyTable from './mytable'
import { makeStyles } from '@material-ui/core/styles';


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
  const [stateDifficulty, setDifficulty] = React.useState({
    checkedLittle: true,
    checkedMiddle: true,
    checkedBig: true,
  });
  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.headContaner}>
        <Header />
      </Container>
      <Container className={classes.mainContaner}>
        <Paper elevation="3" className={classes.paper}>
             {/*  <Sidebar /> */}
              <MyTable />
        </Paper>
      </Container>

      <Paper width="100%">
        Some add info
    </Paper>
    </React.Fragment>
  );
}
