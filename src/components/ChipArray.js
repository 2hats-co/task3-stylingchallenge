import React from 'react';

import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  chip: {
    margin: '8px 4px 0',
  },
  chipArray: {
    margin: '-8px -28px 0',
  },
});

const ChipArray = props => {
  const { items } = props;
  const classes = useStyles();

  return (
    <div className={classes.chipArray}>
      {items.map((x, i) => (
        <Chip className={classes.chip} key={`${i}-${x}`} label={x} variant='outlined' color='secondary' />
      ))}
    </div>
  );
};

export default ChipArray;
