import React from 'react';

import { Container, createMuiTheme } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TopBar from './components/TopBar';
import ChipArray from './components/ChipArray';
import Panel from './components/Panel';
import { ThemeProvider } from '@material-ui/styles';
import { purple, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
palette: {
  primary: purple,
  secondary: pink,
},

  typography: { fontFamily: ['Work Sans', 'sans-serif'].join(',') },
})

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: 70,
  },
  panel: {
    borderTop: 0,
  }
}))

const App = props => {
  const classes = useStyles();
  return (
    <ThemeProvider theme={theme}>
      <TopBar />

      <Container className={classes.container} maxWidth="md">
        <Panel title="Styling" body="It’s never as easy as it seems." />
        <Panel title="CSS" body="Is a weird beast." />
        <Panel
          title="Here’s some chips for you"
          body={
            <ChipArray
              items={[
                'Grace Bay',
                'Baia do Sancho',
                'Varadero Beach',
                'Eagle Beach',
                'Seven Mile Beach',
                'La Concha Beach',
                'Clearwater Beach',
                'Seven Mile Beach',
                'Bavaro Beach',
                'Playa Norte',
                'Elafonissi Beach',
                'Falesia Beach',
                'Fig Tree Bay',
                'Bournemouth Beach',
                'Anse Lazio',
                'Manly Beach',
                'Santa Monica Beach',
                'Agonda Beach',
                'Kleopatra Beach',
                'Galapagos Beach',
              ]}
            />
          }
        />
      </Container>
    </ThemeProvider>
  );
};

export default App;
