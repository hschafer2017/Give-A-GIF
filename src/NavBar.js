import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { fade } from '@material-ui/core/styles/colorManipulator';
import IconButton from '@material-ui/core/IconButton';
import FilterVintage from '@material-ui/icons/FilterVintage';
import Gif from '@material-ui/icons/Gif';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';


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

class GifNavBar extends React.Component {
    state = {
      auth: true,
      anchorEl: null,
    };
  
    handleChange = event => {
      this.setState({ auth: event.target.checked });
    };
  
    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleCloseSource = () => {
      window.location = 'https://github.com/hschafer2017/Give-A-GIF';
      this.setState({ anchorEl: null });
    };

    handleCloseAbout = () => {
        window.location = 'https://github.com/hschafer2017/Give-A-GIF/blob/master/README.md';
        this.setState({ anchorEl: null });
    };
    
    handleCloseGiphy = () => {
        window.location = 'https://developers.giphy.com/docs/';
        this.setState({ anchorEl: null });
    };
    
    handleClose = () => {
        this.setState({ anchorEl: null });
    };


render() {
  const { classes } = this.props;
  const { auth, anchorEl } = this.state;
  const open = Boolean(anchorEl);
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
          {auth && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : null}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <Gif />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={open}
                  onClose={this.handleClose}
                >
                <MenuItem onClick={this.handleCloseSource}>
                Source Code</MenuItem>
                <MenuItem onClick={this.handleCloseAbout}>About Project</MenuItem>
                <MenuItem onClick={this.handleCloseGiphy} >Giphy API</MenuItem>
                </Menu>
              </div>
            )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
}

GifNavBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GifNavBar);