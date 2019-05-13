import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
  withStyles
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const styles = {
  goButton: {
    position: 'absolute',
    right: '3%'
  },
  stylingChallengeLabel: {
    marginLeft: '8px'
  }
};

const TopBar = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className={classes.stylingChallengeLabel}>
          Styling Challenge
        </Typography>

        <Button variant="contained" className={classes.goButton} color="primary">Let’s go!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
