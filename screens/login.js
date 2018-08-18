import React from "react";
import { View, Text, Image } from "react-native";
import PropTypes from "prop-types";
import styled from "styled-components";

import BtnGroup from "../blocks/login-btns";
import LogoImage from "../elements/logo-24px";
import Logo from "../assets/logo-meetsta-24px.png";

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <LogoImage source={Logo} />
        <BtnGroup>
          <BtnGroup.SignUp title="Sign Up" />
          <BtnGroup.Fb title="Sign In With Facebook" />
          <BtnGroup.Login title="Log In" />
        </BtnGroup>
      </Container>
    );
  }
}

const Container = styled.View`
  height: 100%;
  justify-content: center;
`;

export default Login;
