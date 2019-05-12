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
    // flexDirection: 'row',
    // alignSelf: 'flex-end',
    // color: 'primary'
    // color: theme.palette.primary
    position: "absolute",
    // top: '0',
    right: '3%'
  },
};

const TopBar = props => {
  const { classes } = props;
  return (
    <AppBar position="fixed" color="secondary">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="Menu">
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" color="inherit">
          Styling Challenge
        </Typography>

        <Button variant="contained" className={classes.goButton} color="primary">Let’s go!</Button>
      </Toolbar>
    </AppBar>
  );
};

export default withStyles(styles)(TopBar);
