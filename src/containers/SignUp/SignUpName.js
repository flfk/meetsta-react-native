import React from 'react';
import PropTypes from 'prop-types';

import HeaderOne from '../../components/HeaderOne';
import Container from './Container';
import FormGroupText from '../../components/FormGroupText';
import Btn from '../../components/Btn';

const propTypes = {};

const defaultProps = {};

class ScreenSignUpName extends React.Component {
  state = {
    nameFirst: 'Sammy',
    nameLast: 'Alderson'
  };

  handleNameFirstUpdate = nameFirst => {
    this.setState({ nameFirst });
  };

  handleNameLastUpdate = nameLast => {
    this.setState({ nameLast });
  };

  goToNext = () => {
    this.props.navigation.navigate('SignUpEmail', {
      nameFirst: this.state.nameFirst,
      nameLast: this.state.nameLast
    });
  };

  render() {
    return (
      <Container>
        <HeaderOne>Tell us your name</HeaderOne>
        <FormGroupText
          label={'First Name'}
          value={this.state.nameFirst}
          handler={this.handleNameFirstUpdate}
        />
        <FormGroupText
          label={'Last Name'}
          value={this.state.nameLast}
          handler={this.handleNameLastUpdate}
        />
        <Btn title="Next" onPress={this.goToNext} />
      </Container>
    );
  }
}

export default ScreenSignUpName;
