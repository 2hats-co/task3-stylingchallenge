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
  expansionPanelDetails: {
    display: 'flex',
    padding: '8px 0 24px',
    margin: 'auto -4px',
  },
  expanded: {
  },
});

const Panel = props => {
  const { title, body } = props;
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

      <ExpansionPanelDetails className={classes.expansionPanelDetails} color="primary">
        {typeof body === 'string' ? <Typography>{body}</Typography> : body}
        {/* Need to do this. Otherwise will get <div> cannot be a descendant of <p> DOM validation warning */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Panel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default Panel;
