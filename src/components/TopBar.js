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

        <Typography className={classes.stylingChallengeLabel} variant="h6" color="inherit" >
          Styling Challenge
        </Typography>

        <Button className={classes.goButton} variant="contained" color="secondary">Let’s go!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
