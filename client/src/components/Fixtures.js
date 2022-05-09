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
      const data = await axios.get('https://fantasy.premierleague.com/api/fixtures/?future=1');
      setFixtures(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

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
        <List.Item>
          <List.Content>
            Match 1
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            Match 2
          </List.Content>
        </List.Item>
        <List.Item>
          <List.Content>
            Match 3
          </List.Content>
        </List.Item>
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
