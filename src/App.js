import React from 'react';

import { Container } from '@material-ui/core';

import TopBar from './components/TopBar';
import ChipArray from './components/ChipArray';
import Panel from './components/Panel';

const App = props => {
  return (
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
  );
};

export default App;
