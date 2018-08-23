import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import Container from '../../components/Container';

const propTypes = {};

const defaultProps = {};

const AddEvent = props => {
  return (
    <Container>
      <Text> Add confirmation code</Text>
      <Button title="Submit" onPress={() => true} />
    </Container>
  );
};

export default AddEvent;
