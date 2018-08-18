import React from "react";
import { View } from "react-native";

import Events from "./screens/Events";
import Login from "./screens/Login";

export default class App extends React.Component {
  render() {
    return (
      <View>
        <Events />
      </View>
    );
  }
}
