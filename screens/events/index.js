import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from "prop-types";

import Cell from "./Cell";
import Container from "../../shared/Container";
import ListEvents from "./ListEvents";
import SectionHeader from "./SectionHeader";
import BtnSec from "../../shared/BtnSecondary";

const TEST_DATA = [
  {
    title: "Your Tickets",
    data: ["Andre's First Meet & Greet", "Meet Honeydippaaa"]
  },
  {
    title: "Your Events",
    data: ["Waud Twins - Euro Fans!", "Waud Twins - Aussie Fans"]
  }
];

const propTypes = {};

const defaultProps = {};

class Events extends React.Component {
  static navigationOptions = {};

  // constructor() {
  //   super();
  //   this.state = {
  //     events: []
  //   };
  // }

  state = {
    events: []
  };

  componentDidMount() {
    this.getData();
  }

  getData = data => {
    this.setState({ events: TEST_DATA });
  };

  goToAddEvent = () => {
    this.props.navigation.navigate("AddEvent");
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
