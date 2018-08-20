import React from "react";
import PropTypes from "prop-types";
import { View, Text, Button } from "react-native";

const propTypes = {};

const defaultProps = {};

const AddEvent = props => {
  return (
    <View>
      <Text> Add confirmation code</Text>
      <Button title="Submit" onPress={() => true} />
    </View>
  );
};

export default AddEvent;
