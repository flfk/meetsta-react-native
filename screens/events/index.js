import React from "react";
import { SectionList, Text } from "react-native";
import PropTypes from "prop-types";

import Container from "./Container";
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

class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      events: []
    };
  }

  componentDidMount() {
    this.getData();
  }

  getData = data => {
    this.setState({ events: TEST_DATA });
  };

  renderItem = ({ item, index, section }) => {
    return <Text key={index}>{item}</Text>;
  };

  renderSectionHeader = ({ section: { title } }) => {
    return <Text style={{ fontWeight: "bold" }}>{title}</Text>;
  };

  render() {
    return (
      <Container>
        <SectionList
          renderItem={this.renderItem}
          renderSectionHeader={this.renderSectionHeader}
          sections={this.state.events}
          keyExtractor={(item, index) => item + index}
        />
        <BtnSec title="Add confirmation code" />
      </Container>
    );
  }
}

export default Login;
