import React from 'react';

import { Chip } from '@material-ui/core';

const ChipArray = props => {
  const { items } = props;

  return (
    <div>
      {items.map((x, i) => (
        <Chip key={`${i}-${x}`} label={x} />
      ))}
    </div>
  );
};

export default ChipArray;
