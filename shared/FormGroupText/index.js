import PropTypes from "prop-types";
import React from "react";
import { View } from "react-native";

import InputLabel from "./InputLabel";
import InputText from "./InputText";

const defaultProps = {};

class FormGroupText extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    placeholder: PropTypes.string
  };

  state = {
    text: "Hello World"
  };

  componentDidMount() {
    console.log(this.props);
    this.setState({ text: this.props.placeholder });
  }

  handleTextChange = text => {
    this.setState({ text });
  };

  render() {
    return (
      <View>
        <InputLabel>{this.props.label}</InputLabel>
        <InputText
          value={this.state.text}
          onChangeText={this.handleTextChange}
        />
      </View>
    );
  }
}

export default FormGroupText;
