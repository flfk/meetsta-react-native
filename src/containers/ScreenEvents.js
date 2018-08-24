import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Cell from '../components/Cell';
import Container from '../components/ContainerCentre';
import TEST_DATA_EVENTS from '../testData/dataEvents';
import ListEvents from '../components/ListEvents';
import SectionHeader from '../components/ListSectionHeader';
import BtnSec from '../components/BtnSecondary';

import TEST_DATA from '../data/testData';

const TEST_EVENTS = [TEST_DATA.db.Events.eventAndreSwiley.title];

const propTypes = {};

const defaultProps = {};

class Events extends React.Component {
  static navigationOptions = {};

  state = {
    events: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ events: TEST_EVENTS });
  };

  goToAddEvent = () => {
    this.props.navigation.navigate('AddEvent');
  };

  renderItem = ({ item, index, section }) => {
    return <Cell key={index}>{item}</Cell>;
  };

  render() {
    return (
      <Container>
        <ListEvents
          renderItem={this.renderItem}
          data={this.state.events}
          keyExtractor={(item, index) => item + index}
        />
        <BtnSec title="Add confirmation code" onPress={this.goToAddEvent} />
      </Container>
    );
  }
}

export default Events;
