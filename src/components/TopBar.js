import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

const TopBar = props => {
  return (
    <AppBar position="fixed">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit">
          Styling Challenge
        </Typography>

        <Button variant="contained">Let’s go!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
