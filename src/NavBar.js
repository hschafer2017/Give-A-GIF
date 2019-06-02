import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import FilterVintage from '@material-ui/icons/FilterVintage';


const styles = {
  root: {
    flexGrow: 1,
  },
  app : {
    '&:hover': {
      backgroundColor: fade('#3f51b5', 0.90),
    },
  },
  grow: {
    flexGrow: 1,
  },
  navIcon: {
    marginLeft: -12,
    marginRight: 20,
  },
};

function GifNavBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.app}>
        <Toolbar>
        <IconButton className={classes.navIcon} color="inherit" aria-label="Menu">
            <FilterVintage />
          </IconButton>
          <Typography variant="h6" color="inherit" className={classes.grow}>
            Give A Gif
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

GifNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GifNavBar);