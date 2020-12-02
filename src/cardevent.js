import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import GradeRoundedIcon from '@material-ui/icons/GradeRounded';
import IconButton from '@material-ui/core/IconButton';
import { Check, CheckBox } from '@material-ui/icons';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 280,
    height: 300,

  },
  buttonsSide: {
    '& > *': {
      margin: theme.spacing(2),
      alignItems: 'right',
      alignSelf: "end",
      textAlign: "right"
    }
  },
}));

export default function CardEvent(props) {
  const classes = useStyles();
  const { title, image_url, short_info } = props;

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={image_url}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" >
            {short_info}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions disableSpacing>
        <Button size="medium" color="primary" >
          Зарегистрироваться
        </Button>
        <FormControlLabel
        control={<Checkbox icon={<GradeRoundedIcon />} checkedIcon={<GradeRoundedIcon />} name="checkedH" />}
      />

      </CardActions>
    </Card>
  );
}
