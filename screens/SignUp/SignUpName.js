import React from "react";
import PropTypes from "prop-types";
import { TextInput, Button } from "react-native";

import HeaderOne from "../../shared/HeaderOne";
import Container from "../../shared/Container";
import FormGroupText from "../../shared/FormGroupText";

const propTypes = {};

const defaultProps = {};

class ScreenSignUpName extends React.Component {
  // state = {
  //   nameFirst: "Placeholder - first",
  //   nameLast: "Placeholder - last"
  // };

  // handleNameFirstUpdate = nameFirst => {
  //   this.setState({ nameFirst });
  // };

  // handleNameLastUpdate = nameLast => {
  //   this.setState({ nameLast });
  // };

  goToNext = () => {
    this.props.navigation.navigate("SignUpEmail");
  };

  // <InputText
  //         value={this.state.nameFirst}
  //         onChangeText={this.handleNameFirstUpdate}
  //       />
  //       <InputText
  //         value={this.state.nameLast}
  //         onChangeText={this.handleNameLastUpdate}
  //       />
  //       <Button title="next" onPress={this.goToNext} />

  render() {
    return (
      <Container>
        <HeaderOne>Tell us your name</HeaderOne>
        <FormGroupText />
      </Container>
    );
  }
}

export default ScreenSignUpName;
