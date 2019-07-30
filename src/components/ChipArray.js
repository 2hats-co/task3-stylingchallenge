import React from 'react';

import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  chips: {
    margin: theme.spacing(1),
    marginLeft: 0,
    marginTop: 0,
  }
}))

const ChipArray = props => {
  const { items } = props;
  const classes = useStyles();

  return (
    <div>
      {items.map((x, i) => (
        <Chip size='small' className={classes.chips} key={`${i}-${x}`} label={x} />
      ))}
    </div>
  );
};

export default ChipArray;
