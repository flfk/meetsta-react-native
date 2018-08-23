import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import HeaderOne from '../../components/HeaderOne';
import Container from '../../components/ContainerTop';
import FormGroupText from '../../components/FormGroupText';
import Btn from '../../components/Btn';

const propTypes = {};

const defaultProps = {};

class ScreenSignUpPassword extends React.Component {
  state = {
    password: 'password'
  };

  handleEmailUpdate = password => {
    this.setState({ password });
  };

  getNavParams = () => {
    const { navigation } = this.props;
    return {
      nameFirst: navigation.getParam('nameFirst', 'NO-NAME-FIRST'),
      nameLast: navigation.getParam('nameLast', 'NO-NAME-LAST'),
      email: navigation.getParam('email', 'NO-EMAIL')
    };
  };

  submitUser = () => {
    console.log(this.getNavParams());
    this.props.navigation.navigate('Main');
  };

  render() {
    return (
      <Container>
        <HeaderOne>Create a password</HeaderOne>
        <FormGroupText
          label={'Password'}
          value={this.state.password}
          handler={this.handleEmailUpdate}
          secureTextEntry={true}
        />
        <Btn title="Sign Up" onPress={this.submitUser} />
      </Container>
    );
  }
}

export default ScreenSignUpPassword;
