import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
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
  bottomPaper: {
    padding: 10,
    margin: 40,
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
              <MyTable />
        </Paper>
      </Container>

      <Paper width="100%" className={classes.bottomPaper}>
        Some add info
    </Paper>
    </React.Fragment>
  );
}
