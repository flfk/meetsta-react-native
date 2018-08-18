import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Btn from "../elements/btn";

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Text>Hello, World</Text>
        <Btn title="testing" onPress={() => true} />
      </View>
    );
  }
}

export default Login;
