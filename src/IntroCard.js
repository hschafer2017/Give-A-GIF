import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import GifButton from './Button'
import { search } from './apiUtils'

const styles = {
  card: {
    minWidth: 250,
    maxWidth: 450,
    minHeight: 250,
    margin: '0 auto',
    marginTop: '18%',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    display: 'inline-block',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 5px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  query: {
    textTransform: 'capitalize',
    padding: 5,
  },
  pos: {
    marginBottom: 12,
  },
  p: {
    fontSize: 18,
    lineHeight: 1.5,
}
};


function IntroCard(props) {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;
  const splitSearchQuery = search[0].split(/(\s+)/).filter(e => e.length > 1)

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom id="search-query">
        </Typography>
        <Typography variant="h5" component="h2" className={classes.query}>
          {splitSearchQuery[0]}
          {bull}
          {splitSearchQuery[1]}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
            Click "Show Me the Gifs" to search again
        </Typography>
        <Typography className={classes.p} component="p">
          <br />
          {'GIFs were searched for using these two words provided by a random word generator. Hover over any GIF to see more GIFs like it.'}
        </Typography>
      </CardContent>
      <CardActions>
        <GifButton></GifButton>
      </CardActions>
    </Card>
  );
}

IntroCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroCard);