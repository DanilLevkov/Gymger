import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: 'relative',
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: 'rgba(0,0,0,.3)',
  },
  mainFeaturedPostContent: {
    position: 'relative',
    padding: theme.spacing(3),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(6),
      paddingRight: 0,
    },
  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(1),
      alignItems: 'right',
      alignSelf: "end",
      textAlign: "right"
      
    },
  },
}));

export default function MainFeaturedPost(props) {
  const classes = useStyles();
  const { title, image_url, short_info } = props;

  return (
    <Paper className={classes.mainFeaturedPost} style={{ backgroundImage: `url(${image_url})` }}>
      {<img style={{ display: 'none' }} src={image_url} />}
      <div className={classes.overlay} />
      <Grid container>
        <Grid item md={6}>
          <div className={classes.mainFeaturedPostContent}>
            <Typography component="h1" variant="h3" color="inherit" >
              {title}
            </Typography>
            <Typography variant="h6" color="inherit" paragraph>
              {short_info}
            </Typography>
          </div>
        </Grid>
        <Grid item md={6} className={classes.buttonsSide}>
          <div className={classes.buttonsSide}>
            <IconButton>
              <GradeRoundedIcon fontSize="large" color="secondary"  />
            </IconButton>
          </div>
        </Grid>
      </Grid>
    </Paper>

  );
}

MainFeaturedPost.propTypes = {
  post: PropTypes.object,
};

