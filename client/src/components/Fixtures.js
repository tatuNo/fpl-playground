import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Icon,
  Button,
  Container,
  List,
} from 'semantic-ui-react';
import styles from 'styled-components';

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);

  useEffect(async () => {
    try {
      const { data } = await axios.get('http://localhost:3003/proxy/api/fixtures/?future=1');
      setFixtures(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  if (!fixtures) {
    return <div>loading...</div>;
  }

  const parseDate = (date) => new Date(date).toLocaleString(undefined, {
    day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  console.log(fixtures);

  return (
    <>
      <StyledContainer>
        <Button size="tiny" icon labelPosition="left">
          <Icon name="left arrow" />
          Prev
        </Button>
        <span>Gameweek xx xxx xxxxx</span>
        <Button size="tiny" icon labelPosition="right">
          <Icon name="right arrow" />
          Next
        </Button>
      </StyledContainer>
      <List celled>
        {fixtures.map((fixture) => (
          <List.Item key={fixture.code}>
            <List.Content>
              <List.Header>{parseDate(fixture.kickoff_time)}</List.Header>
              {fixture.team_h}
              VS
              {fixture.team_a}
            </List.Content>
          </List.Item>
        ))}
      </List>
    </>
  );
};

const StyledContainer = styles(Container)`
  &&& {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: flex-end;
  }
`;

export default Fixtures;
