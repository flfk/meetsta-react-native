import React from 'react';
import PropTypes from 'prop-types';

import TextH1 from '../../components/TextH1';
import Container from '../../components/ContainerTop';
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
        <TextH1>Tell us your name</TextH1>
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
