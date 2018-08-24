import React from 'react';
import { Button } from 'react-native';
import PropTypes from 'prop-types';

import BtnNavBar from '../components/BtnNavBar';
import CellEvent from '../components/CellEvent';
import COLORS from '../utils/Colors';
import Container from '../components/ContainerCentre';
import ListEvents from '../components/ListEvents';
import TextH1 from '../components/TextH1';
import BtnSec from '../components/BtnSecondary';

import BANNER_ANDRE from '../assets/EventBannerAndre.jpg';

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
  static navigationOptions = ({ navigation }) => {
    return {
      headerRight: <BtnNavBar title="Add ticket" onPress={() => navigation.navigate('AddTicket')} />
    };
  };

  state = {
    events: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = () => {
    this.setState({ events: TEST_EVENTS });
  };

  renderItem = ({ item, index }) => {
    return (
      <CellEvent key={index}>
        <CellEvent.Image source={BANNER_ANDRE} />
        <CellEvent.Title>{item.title}</CellEvent.Title>
        <CellEvent.Creator>{item.creator}</CellEvent.Creator>
        <CellEvent.Detail>{item.date}</CellEvent.Detail>
        <CellEvent.Detail>{item.time}</CellEvent.Detail>
        <CellEvent.Detail>Order #{item.order}</CellEvent.Detail>
        <CellEvent.Btn title="Join Queue" />
      </CellEvent>
    );
  };

  renderHeader = {};

  render() {
    return (
      <Container>
        <ListEvents
          ListHeaderComponent={<TextH1>Tickets</TextH1>}
          renderItem={this.renderItem}
          data={this.state.events}
          keyExtractor={(event, index) => event + index}
        />
      </Container>
    );
  }
}

Events.propTypes = propTypes;
Events.defaultProps = defaultProps;

export default Events;
