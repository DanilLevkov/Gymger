import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MyTable from './mytable'
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';


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



var coaches = [];
function setCoaches(tmp){
    coaches = tmp;
}
export function getCoach(id) {
    for (var item of coaches){
        if (item.id === id){
            return item;
        }
    }
}


function Parsing(elements) {
  var rows = {};
  //Parsing
  for (const elem of elements) {
      const val = rows[elem.timeGroup];
      if (val === undefined) {
          rows[elem.timeGroup] = {};
          rows[elem.timeGroup][elem.week_day] = [elem];
      } else {
          if (elem.week_day in rows[elem.timeGroup]) {
              rows[elem.timeGroup][elem.week_day].push(elem);
          } else{
              rows[elem.timeGroup][elem.week_day] = [elem];
          }
      }
  }
  return rows;
}


export default function Blog() {
  const classes = GridStyles();
  
  const [elements, setelements] = React.useState([]);
  useEffect(() => {
      fetch('https://qxrlui5g98.execute-api.us-east-1.amazonaws.com/MyStage')
          .then(res => res.json())
          .then(
              (result) => {
                  setelements(result);
              },
              // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
              // чтобы не перехватывать исключения из ошибок в самих компонентах.
              (error) => {
                  alert(error);
              }
          )
      
          fetch('https://78qhmysrfl.execute-api.us-east-1.amazonaws.com/wev')
          .then(res => res.json())
          .then(
              (result) => {
                  setCoaches(result);
              },
              // Примечание: важно обрабатывать ошибки именно здесь, а не в блоке catch(),
              // чтобы не перехватывать исключения из ошибок в самих компонентах.
              (error) => {
                  alert(error);
              }
          )

  }, [])
  const rows = Parsing(elements);
  const times = Object.keys(rows).sort();
  


  return (
    <React.Fragment>
      <CssBaseline />
      <Container className={classes.headContaner}>
        <Header />
      </Container>
      <Container className={classes.mainContaner}>
        <Paper elevation="3" className={classes.paper}>
              <MyTable rows={rows} times={times} />
        </Paper>
      </Container>

      <Paper width="100%" className={classes.bottomPaper}>
        Some add info
    </Paper>
    </React.Fragment>
  );
}
