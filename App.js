import { createSwitchNavigator } from "react-navigation";
import React from "react";
import { View } from "react-native";

import ScreenEvents from "./screens/Events";
import ScreenLogin from "./screens/Login";

const AppNavigator = createSwitchNavigator({
  RouteLogin: ScreenLogin,
  RouteEvents: ScreenEvents
});

export default class App extends React.Component {
  render() {
    return (
      <View>
        <AppNavigator />
      </View>
    );
  }
}
