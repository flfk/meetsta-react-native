import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import InputLabel from "./InputLabel";
import InputText from "./InputText";

const defaultProps = {};

class FormGroupText extends React.Component {
  static propTypes = {
    labelTxt: PropTypes.string.isRequired
  };

  state = {
    text: "Hello World"
  };

  handleTextChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <InputLabel>InputLabel</InputLabel>
        <InputText
          value={this.state.text}
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}

export default FormGroupText;
