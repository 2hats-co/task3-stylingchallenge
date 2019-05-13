import React from 'react';

import { Chip } from '@material-ui/core';
import { styled } from '@material-ui/styles'

const SCChip = styled(Chip)({
  margin: '0 8px 8px 0',
});

const ChipArray = props => {
  const { items } = props;

  return (
    <div>
      {items.map((x, i) => (
        <SCChip key={`${i}-${x}`} label={x} color="primary"/>
      ))}
    </div>
  );
};

export default ChipArray;
