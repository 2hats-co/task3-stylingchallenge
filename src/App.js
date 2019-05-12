import React from 'react';

import { Container, createMuiTheme } from '@material-ui/core';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { pink, deepPurple } from "@material-ui/core/colors/";

import TopBar from './components/TopBar';
import ChipArray from './components/ChipArray';
import Panel from './components/Panel';

const theme = createMuiTheme({
  palette: {
    primary: pink,
    secondary: deepPurple
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Work Sans',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
});

const App = props => {
  return (
    <MuiThemeProvider theme={theme}>
    <div>
      <TopBar />

      <Container maxWidth="md">
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
    </div>
    </MuiThemeProvider>
  );
};

export default App;
