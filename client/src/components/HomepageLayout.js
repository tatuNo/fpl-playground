import React from 'react';
import {
  Segment,
  Grid,
  Header,
} from 'semantic-ui-react';

const HomepageLayout = () => (
  <Segment style={{ padding: '0em' }} vertical>
    <Grid celled="internally" columns="equal" stackable>
      <Grid.Row textAlign="center">
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Fixtures
          </Header>
          <p style={{ fontSize: '1.33em' }}>Todo fixtures table</p>
        </Grid.Column>
        <Grid.Column style={{ paddingBottom: '5em', paddingTop: '5em' }}>
          <Header as="h3" style={{ fontSize: '2em' }}>
            Standings
          </Header>
          <p style={{ fontSize: '1.33em' }}>Todo league standings</p>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  </Segment>
);

export default HomepageLayout;
