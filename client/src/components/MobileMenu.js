import React, { useState } from 'react';

import {
  Sidebar,
  Segment,
  Menu,
  Container,
  Button,
  Icon,
} from 'semantic-ui-react';

import Heading from './Heading';
import { Media } from '../utils';

const MobileMenu = () => {
  const [sidebarOpened, setsideBarOpened] = useState(false);

  const handleSidebarHide = () => setsideBarOpened(false);
  const handleSidebarOpen = () => setsideBarOpened(true);

  return (
    <Media as={Sidebar.Pushable} at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          as={Menu}
          animation="overlay"
          inverted
          onHide={handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item as="a" active>
            Home
          </Menu.Item>
          <Menu.Item as="a">Lorem</Menu.Item>
          <Menu.Item as="a">Ipsum</Menu.Item>
          <Menu.Item as="a">Dolor</Menu.Item>
          <Menu.Item as="a">Log in</Menu.Item>
          <Menu.Item as="a">Sign Up</Menu.Item>
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign="center"
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size="large">
                <Menu.Item onClick={handleSidebarOpen}>
                  <Icon name="sidebar" />
                </Menu.Item>
                <Menu.Item position="right">
                  <Button as="a" inverted>
                    Log in
                  </Button>
                  <Button as="a" inverted style={{ marginLeft: '0.5em' }}>
                    Sign Up
                  </Button>
                </Menu.Item>
              </Menu>
            </Container>
            <Heading mobile />
          </Segment>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    </Media>
  );
};

export default MobileMenu;
