import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import Btn from "../elements/btn";
import BtnSec from "../elements/btn-secondary";

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <Btn title="Sign Up" onPress={() => true} />
        <BtnSec title="Log In" onPress={() => true} />
      </View>
    );
  }
}

export default Login;
