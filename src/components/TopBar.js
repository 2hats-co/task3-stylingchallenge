import React from 'react';

import {
  AppBar,
  Toolbar,
  IconButton,
  Button,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
}))

const TopBar = props => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Toolbar>

          <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>

          <Typography className={classes.title} variant="h6" color="inherit">
            Styling Challenge
        </Typography>

          <Button color='secondary' variant="contained">Let’s go!</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
