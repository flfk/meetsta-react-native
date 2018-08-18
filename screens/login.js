import React from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";

import BtnGroup from "../blocks/login-btns";

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        <BtnGroup>
          <BtnGroup.SignUp title="Sign Up" />
          <BtnGroup.Fb title="Sign In With Facebook" />
          <BtnGroup.Login title="Log In" />
        </BtnGroup>
      </View>
    );
  }
}

export default Login;
