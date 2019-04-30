import React from 'react';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Panel = props => {
  const { title, body } = props;

  return (
    <ExpansionPanel>
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {typeof body === 'string' ? <Typography>{body}</Typography> : body}
        {/* Need to do this. Otherwise will get <div> cannot be a descendant of <p> DOM validation warning */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

export default Panel;
