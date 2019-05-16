import React from 'react';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { makeStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const useStyles = makeStyles({
  expansionPanel: {
    boxShadow: 'none',
    '&$expanded': {
      margin: '0'
    }
  },
  expansionPanelSummary: {
    padding: '0',
    '&$expanded': {
      margin: '0'
    }
  },
  expanded: {
  },
});

const Panel = props => {
  const { title, body, detailPanelStyle } = props;
  const classes = useStyles();

  return (
    <ExpansionPanel classes={{
      root: classes.expansionPanel,
      expanded: classes.expanded
    }} >
      <ExpansionPanelSummary classes={{
        root: classes.expansionPanelSummary,
        content: classes.expansionPanelSummary,
        expanded: classes.expanded
      }} expandIcon={<ExpandMoreIcon />} >
        <Typography variant="h6">{title}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails className={detailPanelStyle} color="primary">
        {typeof body === 'string' ? <Typography>{body}</Typography> : body}
        {/* Need to do this. Otherwise will get <div> cannot be a descendant of <p> DOM validation warning */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Panel.propTypes = {
  detailPanelStyle: PropTypes.string
};

export default Panel;
