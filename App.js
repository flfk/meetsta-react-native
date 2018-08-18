import React from "react";
import { View } from "react-native";

import Events from "./screens/events";
import Login from "./screens/login";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Events />
      </View>
    );
  }
}
