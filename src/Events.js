import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import MainFeaturedPost from './MainFeaturedPost';
import Main from './Main';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import markdown from './text'
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import IconButton from '@material-ui/core/IconButton';
import CardEvent from './cardevent';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(2),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
}));

const posts = [markdown];

export default function Events(props) {
  const { events } = props;
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={5} className={classes.mainGrid}>
          <Grid container item xs={9} spacing={4}>
            {events.map((event) => (
              <Grid item xs={3} sm={4}>
              <CardEvent title={event.title} image_url={event.image_url} short_info= {event.short_info}/>
              </Grid>
            ))}
          </Grid>

          <Grid container item xs={3} sm={3} md={3}>
            <Sidebar date={"fgf"} format={"fgbfn"} where={"mk"} price={"kjbjh"} time={"jhbjh"} />
          </Grid>

        </Grid>

    </React.Fragment>
  );
}

