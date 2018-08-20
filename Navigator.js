import { createSwitchNavigator, createStackNavigator } from "react-navigation";

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
    Main: NavigatorMain
  },
  {
    initialRouteName: "Login"
  }
);

export default AppNavigator;
