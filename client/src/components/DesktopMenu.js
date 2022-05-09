import React, { useState } from 'react';

import {
  Visibility,
  Segment,
  Menu,
  Container,
  Button,
} from 'semantic-ui-react';

import Heading from './Heading';
import { Media } from '../utils';

const DesktopMenu = () => {
  const [fixed, setFixed] = useState(false);

  const hideFixedMenu = () => setFixed(false);
  const showFixedMenu = () => setFixed(true);

  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={showFixedMenu}
        onBottomPassedReverse={hideFixedMenu}
      >
        <Segment
          inverted
          textAlign="center"
          style={{ minHeight: 700, padding: '1em 0em' }}
          vertical
        >
          <Menu
            fixed={fixed ? 'top' : null}
            inverted={!fixed}
            pointing={!fixed}
            secondary={!fixed}
            size="large"
          >
            <Container>
              <Menu.Item as="a" active>
                Home
              </Menu.Item>
              <Menu.Item as="a">Lorem</Menu.Item>
              <Menu.Item as="a">Ipsum</Menu.Item>
              <Menu.Item as="a">Dolor</Menu.Item>
              <Menu.Item position="right">
                <Button as="a" inverted={!fixed}>
                  Log in
                </Button>
                <Button as="a" inverted={!fixed} primary={fixed} style={{ marginLeft: '0.5em' }}>
                  Sign Up
                </Button>
              </Menu.Item>
            </Container>
          </Menu>
          <Heading />
        </Segment>
      </Visibility>
    </Media>
  );
};

export default DesktopMenu;
