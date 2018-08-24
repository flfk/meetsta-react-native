import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, Button } from 'react-native';

import Container from '../components/ContainerCentre';
import BtnNavBar from '../components/BtnNavBar';

const propTypes = {};

const defaultProps = {};

class AddTicket extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerTitle: 'Add Ticket'
    };
  };

  render() {
    return (
      <Container>
        <Text> Add confirmation code</Text>
        <Button title="Submit" onPress={() => true} />
      </Container>
    );
  }
}

export default AddTicket;
