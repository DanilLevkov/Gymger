import React, { useEffect } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Header from '../Header';
import { makeStyles } from '@material-ui/core/styles';
import { Button, Grid, Paper } from '@material-ui/core';
import MyAdminTable from './AdminTable'
import CreateNew from './CreateNew';


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
        marginTop: "50px",
    },
    bottomPaper: {
        padding: 10,
        margin: 40,
    },
});



var coaches = [];
function setCoaches(tmp) {
    coaches = tmp;
}
export function getCoach(id) {
    for (var item of coaches) {
        if (item.id === id) {
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
            } else {
                rows[elem.timeGroup][elem.week_day] = [elem];
            }
        }
    }
    return rows;
}


export default function Adminpage() {
    const classes = GridStyles();
    const [createNew, setcreateNew] = React.useState(false);
    const [Edit, setEdit] = React.useState(false);

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
                <Header isLogged={true} />
            </Container>
            <Container className={classes.mainContaner}>
                <Grid container justify="space-around">
                    <Grid item>
                        <Button onClick={() => setcreateNew(true)} >
                            Создать занятие
                        </Button>
                    </Grid>
                    <Grid item>
                        {(Edit) ?
                            <Button onClick={() => setEdit(false)}>
                                Скрыть расписание
                            </Button>
                            :
                            <Button onClick={() => setEdit(true)}>
                                Редактировать расписание
                            </Button>
                        }
                    </Grid>
                </Grid>

                {(createNew) ?
                    <Paper elevation="3" className={classes.paper}>
                        <CreateNew />
                    </Paper>
                    :
                    <></>
                }

                {(Edit) ?
                    <Paper elevation="3" className={classes.paper}>
                        <MyAdminTable rows={rows} times={times} isLogged={setEdit} />
                    </Paper>
                    :
                    <></>
                }


            </Container>
        </React.Fragment>
    );
}
