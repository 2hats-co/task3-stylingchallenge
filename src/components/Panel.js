import React from 'react';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { styled } from '@material-ui/styles';

const SCExpansionPanel = styled(ExpansionPanel)({
  boxShadow: 'none'
});

const Panel = props => {
  const { title, body } = props;

  return (
    <SCExpansionPanel color="primary">
      <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
        <Typography variant="h6">{title}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails>
        {typeof body === 'string' ? <Typography>{body}</Typography> : body}
        {/* Need to do this. Otherwise will get <div> cannot be a descendant of <p> DOM validation warning */}
      </ExpansionPanelDetails>
    </SCExpansionPanel>
  );
};

export default Panel;
