import React from 'react';

import { Chip } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles({
  chip: {
    margin: '0 4px 8px',
  },
});

const ChipArray = props => {
  const { items } = props;
  const classes = useStyles();

  return (
    <div>
      {items.map((x, i) => (
        <Chip className={classes.chip} key={`${i}-${x}`} label={x} variant='outlined' color='secondary' />
      ))}
    </div>
  );
};

export default ChipArray;
