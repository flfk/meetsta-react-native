import React from 'react';
import { SectionList, Text } from 'react-native';
import PropTypes from 'prop-types';

import Cell from './Cell';
import Container from '../../components/Container';
import TEST_DATA_EVENTS from '../../testData/dataEvents';
import ListEvents from './ListEvents';
import SectionHeader from './SectionHeader';
import BtnSec from '../../components/BtnSecondary';

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

  getData = data => {
    this.setState({ events: TEST_DATA_EVENTS });
  };

  goToAddEvent = () => {
    this.props.navigation.navigate('AddEvent');
  };

  renderItem = ({ item, index, section }) => {
    return <Cell key={index}>{item}</Cell>;
  };

  renderSectionHeader = ({ section: { title } }) => {
    return <SectionHeader>{title}</SectionHeader>;
  };

  render() {
    return (
      <Container>
        <ListEvents
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.events}
          keyExtractor={(item, index) => item + index}
        />
        <BtnSec title="Add confirmation code" onPress={this.goToAddEvent} />
      </Container>
    );
  }
}

export default Events;
