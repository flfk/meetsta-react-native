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

  toEventScreen = () => {
    this.props.navigation.navigate("RouteEvents");
  };

  render() {
    return (
      <Container>
        <ImageWrapper source={Logo} />
        <BtnGroup>
          <BtnGroup.SignUp title="Sign Up" onPress={this.toEventScreen} />
          <BtnGroup.Fb
            title="Sign In With Facebook"
            onPress={this.toEventScreen}
          />
          <BtnGroup.Login title="Log In" onPress={this.toEventScreen} />
        </BtnGroup>
      </Container>
    );
  }
}

export default Login;
