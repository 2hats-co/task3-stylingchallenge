import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  goButton: {
    position: 'absolute',
    right: '3%'
  },
  stylingChallengeLabel: {
    marginLeft: '8px'
  }
});

const TopBar = props => {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit" className={classes.stylingChallengeLabel}>
          Styling Challenge
        </Typography>

        <Button variant="contained" className={classes.goButton} color="secondary">Let’s go!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
