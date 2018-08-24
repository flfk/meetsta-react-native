import React from 'react';
import PropTypes from 'prop-types';

import CellEvent from '../components/CellEvent';
import Container from '../components/ContainerCentre';
import ListEvents from '../components/ListEvents';
import TextH1 from '../components/TextH1';
import BtnSec from '../components/BtnSecondary';

import TEST_DATA from '../data/testData';

// const TEST_EVENTS = [TEST_DATA.db.Events.eventAndreSwiley.title];

const TEST_EVENTS = [
  {
    title: 'Meet Andre',
    creator: 'Andre Swiley',
    date: 'Sunday, 26 August',
    time: '3:05pm PDT',
    order: '123123123'
  }
];

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

  goToAddTicket = () => {
    this.props.navigation.navigate('AddTicket');
  };

  renderItem = ({ item, index }) => {
    return (
      <CellEvent key={index}>
        <CellEvent.Title>{item.title}</CellEvent.Title>
        <CellEvent.Creator>{item.creator}</CellEvent.Creator>
        <CellEvent.Detail>{item.date}</CellEvent.Detail>
        <CellEvent.Detail>{item.time}</CellEvent.Detail>
        <CellEvent.Detail>{item.order}</CellEvent.Detail>
      </CellEvent>
    );
  };

  render() {
    return (
      <Container>
        <TextH1>Tickets</TextH1>
        <ListEvents
          renderItem={this.renderItem}
          data={this.state.events}
          keyExtractor={(event, index) => event + index}
        />
        <BtnSec title="Add Ticket" onPress={this.goToAddTicket} />
      </Container>
    );
  }
}

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;
