import React from 'react';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
  Typography,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { withStyles } from '@material-ui/styles';
import PropTypes from 'prop-types';

const styles = {
  expanded: {
    margin: '0',
    minHeight: '0',
  },
  expansionPanel: {
    boxShadow: 'none'
  },
  expansionPanelSummary: {
    padding: '0'
  }
};

const Panel = props => {
  const { title, body, classes } = props;

  return (
    <ExpansionPanel classes={{
      root: classes.expansionPanel,
      expanded: classes.expanded
    }} >
      <ExpansionPanelSummary classes={{
        root: classes.expansionPanelSummary,
        expanded: classes.expanded
      }} expandIcon={<ExpandMoreIcon />} >
        <Typography variant="h6">{title}</Typography>
      </ExpansionPanelSummary>

      <ExpansionPanelDetails color="primary">
        {typeof body === 'string' ? <Typography>{body}</Typography> : body}
        {/* Need to do this. Otherwise will get <div> cannot be a descendant of <p> DOM validation warning */}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
};

Panel.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Panel);
