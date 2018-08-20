import { createSwitchNavigator, createStackNavigator } from "react-navigation";
import React from "react";

import ScreenAddEvent from "./screens/AddEvent";
import ScreenEvents from "./screens/Events";
import ScreenLogin from "./screens/Login";

const NavigatorMain = createStackNavigator(
  {
    AddEvent: ScreenAddEvent,
    Events: ScreenEvents
  },
  {
    initialRouteName: "Events"
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Login: ScreenLogin,
    Events: ScreenEvents,
    Main: NavigatorMain
  },
  {
    initialRouteName: "Login"
  }
);

export default class App extends React.Component {
  render() {
    return <AppNavigator />;
  }
}
