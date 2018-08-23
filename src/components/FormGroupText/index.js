import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import InputLabel from "./InputLabel";
import InputText from "./InputText";

const defaultProps = {};

class FormGroupText extends React.Component {
  static propTypes = {
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    placeholder: PropTypes.string,
    secureTextEntry: PropTypes.bool
  };

  static defaultProps = {
    placeholder: "",
    secureTextEntry: false
  };

  render() {
    return (
      <View>
        <InputLabel>{this.props.label}</InputLabel>
        <InputText
          value={this.props.value}
          onChangeText={this.props.handler}
          secureTextEntry={this.props.secureTextEntry}
        />
      </View>
    );
  }
}

export default FormGroupText;
