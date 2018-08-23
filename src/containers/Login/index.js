import React from 'react';
import PropTypes from 'prop-types';

import BtnGroup from './LoginBtns';
import Container from '../../components/Container';
import ImageWrapper from './ImageWrapper';
import Logo from '../../assets/logo-meetsta-24px.png';

const propTypes = {};

const defaultProps = {};

class Login extends React.Component {
  static navigationOptions = {};

  constructor() {
    super();
  }

  Login = () => {
    this.props.navigation.navigate('Main');
  };

  SignUp = () => {
    this.props.navigation.navigate('SignUp');
  };

  render() {
    return (
      <Container>
        <ImageWrapper source={Logo} />
        <BtnGroup>
          <BtnGroup.SignUp title="Sign Up" onPress={this.SignUp} />
          <BtnGroup.Fb title="Sign In With Facebook" onPress={this.Login} />
          <BtnGroup.Login title="Log In" onPress={this.Login} />
        </BtnGroup>
      </Container>
    );
  }
}

export default Login;
