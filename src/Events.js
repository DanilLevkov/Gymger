import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Sidebar from './Sidebar';
import Grid from '@material-ui/core/Grid';
import markdown from './text'
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
  //  <CardEvent title={event.title} image_url={event.image_url} short_info= {event.short_info}/>
  return (
    <Grid container item xs={12} spacing={2}>
      {events.map((event) => (
        <Grid item xs={12} sm={12}>
          <CardEvent title={event.title} image_url={event.image_url} short_info={event.short_info} />
        </Grid>
      ))}
    </Grid>
  );
}

