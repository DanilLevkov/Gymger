import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { TextField, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
    justifyContent: 'space-between',
    minWidth: "1200px"
  },
  toolbarTitle: {
    flex: 1,
  },
  toolbarLink: {
    padding: theme.spacing(1),
    flexShrink: 0,
  },
}));

const sections = [
  { title: 'Расписание', url: '#' },
  { title: 'Тренеры', url: '#' },
  { title: 'Поддержка', url: '#' },
  { title: 'Информация', url: '#' },
];

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Toolbar className={classes.toolbar}>
        <Grid container justify="space-between" alignItems="center">
          <Grid item xs={2} zeroMinWidth="200px">
            <Button size="small" href="#">
              <Typography
                component="h2"
                variant="h5"
                color="inherit"
                noWrap
                className={classes.toolbarTitle}
              >
                Gymger
            </Typography>
            </Button>
          </Grid>

          <Grid item container justify="space-between" xs={6}>
            {sections.map((section) => (
              <Grid item >
                <Link
                  color="inherit"
                  noWrap
                  key={section.title}
                  variant="body2"
                  href={section.url}
                  className={classes.toolbarLink}
                >
                  {section.title}
                </Link>
              </Grid>
            ))}
          </Grid>

          <Grid item xs={4} container>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="right"
              noWrap
              className={classes.toolbarTitle}
            >
              <TextField id="outlined-basic" lineDirection="center" variant="outlined" size="small" />
              <IconButton>
                <SearchIcon />
              </IconButton>
            </Typography>
            
            <Button variant="" href="#" size="small">
              Войти
            </Button>
          </Grid>
        </Grid>
      </Toolbar>

    </React.Fragment >
  );
}

Header.propTypes = {
  sections: PropTypes.array,
  title: PropTypes.string,
};
