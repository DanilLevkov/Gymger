import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import AccessTimeOutlinedIcon from '@material-ui/icons/AccessTimeOutlined';
import TodayIcon from '@material-ui/icons/Today';
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import MonetizationOnOutlinedIcon from '@material-ui/icons/MonetizationOnOutlined';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import { Box } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ThumbUpAltOutlinedIcon from '@material-ui/icons/ThumbUpAltOutlined';
import ThumbDownAltOutlinedIcon from '@material-ui/icons/ThumbDownAltOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const useStyles = makeStyles((theme) => ({
  sidebarAboutBox: {
    padding: theme.spacing(2),
    backgroundColor: theme.palette.grey[200],
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function Sidebar(props) {
  const classes = useStyles();
  const {date,time, format, where, price } = props;

  return (
    <Grid item xs={12} md={12}>
      <Paper elevation={4} className={classes.sidebarAboutBox}>
        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Typography align="left" component="h1" variant="h6">
        Формат мероприятия
        </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Очное"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Дистанционное"
        />
        </Grid>

        </Grid>
        </form>
        
        
        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Typography align="left" component="h1" variant="h6">
        Цена
        </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Бесплатные"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Платные"
        />
        </Grid>

        </Grid>
        </form>
        

        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Typography align="left" component="h1" variant="h6">
        Город
        </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Санкт-Петербург"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Москва"
        />
        </Grid>

        </Grid>
        </form>

        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Typography align="left" component="h1" variant="h6">
        Вид мероприятия
        </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Хакатон"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="lek" size="small" color="secondary" />}
        label="Лекция"
        />
        </Grid>
        <Grid item xs={10}sm={6} >
        <FormControlLabel
        control={<Checkbox value="konf" size="small" color="secondary" />}
        label="Тренинг"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="onl" size="small" color="secondary" />}
        label="Вебинар"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="sta" size="small" color="secondary" />}
        label="Стажировка"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="for" size="small" color="secondary" />}
        label="Форум"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="tren" size="small" color="secondary" />}
        label="Семинар"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="webin" size="small" color="secondary" />}
        label="Онлайн-курс"
        />
        </Grid>
        <Grid item xs={10} sm={6}>
        <FormControlLabel
        control={<Checkbox value="semin" size="small" color="secondary" />}
        label="Конференция"
        />
        </Grid>
        </Grid>
        </form>


        <form className={classes.form} noValidate>
        <Grid container spacing={0}>
        <Grid item xs={12} sm={12}>
        <Typography align="left" component="h1" variant="h6">
        Когда
        </Typography>
        </Grid>
        
        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Сегодня"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="Завтра"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="На этой недели"
        />
        </Grid>

        <Grid item xs={12} sm={12}>
        <FormControlLabel
        control={<Checkbox value="hak" size="small" color="secondary" />}
        label="В этом месяце"
        />
        </Grid>
        </Grid>
        </form>


      <div className={classes.buttonsSide}>
      <Typography
          align="left">
        <Button variant="contained" color="secondary" >Применить</Button>
      </Typography>
      </div>
     
     </Paper>  
    </Grid>
  );
}

Sidebar.propTypes = {
  archives: PropTypes.array,
  description: PropTypes.string,
  social: PropTypes.array,
  title: PropTypes.string,
};
