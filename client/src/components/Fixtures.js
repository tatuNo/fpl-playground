import React, { useEffect, useState } from 'react';
import axios from 'axios';

import {
  Icon,
  Button,
  Container,
  List,
  Image,
  Segment,
} from 'semantic-ui-react';
import styles from 'styled-components';

import useTeams from '../hooks/useTeams';

const Fixtures = () => {
  const [fixtures, setFixtures] = useState([]);
  const teams = useTeams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios.get('http://localhost:3003/proxy/api/fixtures/?future=1');
        setFixtures(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (!fixtures || !teams) {
    return <div>loading...</div>;
  }

  const parseDate = (date) => new Date(date).toLocaleString(undefined, {
    day: 'numeric', month: 'numeric', hour: '2-digit', minute: '2-digit',
  });

  const findTeamName = (id) => {
    const { name } = teams.find((element) => element.id === id);
    return name;
  };

  const findTeamLogoSrc = (id) => {
    const { code } = teams.find((element) => element.id === id);
    return `https://resources.premierleague.com/premierleague/badges/50/t${code}.png`;
  };

  const findFixturesByDate = (date) => {
    const result = fixtures.filter((fixture) => fixture.kickoff_time === date);
    return result;
  };

  const uniqueFixtureDates = [...new Set(fixtures.map((fixture) => fixture.kickoff_time))];

  console.log(fixtures);
  console.log(teams);
  console.log(uniqueFixtureDates);

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
        {uniqueFixtureDates.map((date) => (
          <>
            <Segment>
              {parseDate(date)}
            </Segment>
            {findFixturesByDate(date).map((fixture) => (
              <List.Item key={fixture.code}>
                <Image src={findTeamLogoSrc(fixture.team_h)} />
                <List.Content>
                  {findTeamName(fixture.team_h)}
                  VS
                  {findTeamName(fixture.team_a)}
                </List.Content>
                <Image src={findTeamLogoSrc(fixture.team_a)} />
              </List.Item>
            ))}
          </>
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
