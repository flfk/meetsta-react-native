import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';

import TextH1 from '../../components/TextH1';
import Container from '../../components/ContainerTop';
import FormGroupText from '../../components/FormGroupText';
import Btn from '../../components/Btn';

const propTypes = {};

const defaultProps = {};

class ScreenSignUpEmail extends React.Component {
  state = {
    email: 'sammy_iz_diplo@gmail.com'
  };

  handleEmailUpdate = email => {
    this.setState({ email });
  };

  goToNext = () => {
    const email = this.state.email;
    console.log(email);

    this.props.navigation.navigate('SignUpPassword', {
      email: this.state.email
    });
  };

  render() {
    return (
      <Container>
        <TextH1>And, your email?</TextH1>
        <FormGroupText label={'Email'} value={this.state.email} handler={this.handleEmailUpdate} />
        <Btn title="Next" onPress={this.goToNext} />
      </Container>
    );
  }
}

export default ScreenSignUpEmail;
