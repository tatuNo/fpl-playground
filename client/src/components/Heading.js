import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Header,
  Button,
  Icon,
} from 'semantic-ui-react';
import styled from 'styled-components';

const Heading = ({ mobile }) => (
  <Container text>
    <PrimaryHeader
      content="Fpl playground"
      inverted
      mobile={mobile}
    />
    <SecondaryHeader
      content="Lorem ipsum dolor sit amet."
      inverted
      mobile={mobile}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="right arrow" />
    </Button>
  </Container>
);

const PrimaryHeader = styled(Header)`
  &&& {
    font-size: ${(props) => (props.mobile ? '1.5em' : '3em')};
    font-weight: normal;
    margin-bottom: 0;
    margin-top: ${(props) => (props.mobile ? '1.5em' : '3em')}
  }
`;

const SecondaryHeader = styled(Header)`
  &&& {
    font-size: ${(props) => (props.mobile ? '1.5em' : '1.7em')};
    font-weight: normal;
    margin-top: ${(props) => (props.mobile ? '0.5em' : '1.5em')}
  }
`;

Heading.propTypes = {
  mobile: PropTypes.bool,
};

export default Heading;
