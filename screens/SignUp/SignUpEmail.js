import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import HeaderOne from '../../shared/HeaderOne';
import Container from './Container';
import FormGroupText from '../../shared/FormGroupText';
import Btn from '../../shared/Btn';

const propTypes = {};

const defaultProps = {};

class ScreenSignUpEmail extends React.Component {
  state = {
    email: 'sammy_iz_diplo@gmail.com',
  };

  handleEmailUpdate = email => {
    this.setState({ email });
  };

  goToNext = () => {
    const email = this.state.email;
    console.log(email);

    this.props.navigation.navigate('SignUpPassword', {
      email: this.state.email,
    });
  };

  render() {
    return (
      <Container>
        <HeaderOne>And, your email?</HeaderOne>
        <FormGroupText
          label={'Email'}
          value={this.state.email}
          handler={this.handleEmailUpdate}
        />
        <Btn title="Next" onPress={this.goToNext} />
      </Container>
    );
  }
}

export default ScreenSignUpEmail;
