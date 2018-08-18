import React from "react";
import PropTypes from "prop-types";

import BtnGroup from "./LoginBtns";
import Container from "./Container";
import ImageWrapper from "./ImageWrapper";
import Logo from "../../assets/logo-meetsta-24px.png";

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <Container>
        <ImageWrapper source={Logo} />
        <BtnGroup>
          <BtnGroup.SignUp title="Sign Up" />
          <BtnGroup.Fb title="Sign In With Facebook" />
          <BtnGroup.Login title="Log In" />
        </BtnGroup>
      </Container>
    );
  }
}

export default Login;
