import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    minWidth: 300,
    minHeight: 500,
    margin: '0 auto',
    alignItems: 'center',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
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

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom id="search-query">
        </Typography>
        <Typography variant="h5" component="h2">
          Word 1
          {bull}
          Word 2
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
        <Button size="small">Show Me the Gifs!</Button>
      </CardActions>
    </Card>
  );
}

IntroCard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(IntroCard);