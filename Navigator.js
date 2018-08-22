import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import ScreenAddEvent from './screens/AddEvent';
import ScreenEvents from './screens/Events';
import ScreenLogin from './screens/Login';

import ScreenSignUpEmail from './screens/SignUp/SignUpEmail';
import ScreenSignUpName from './screens/SignUp/SignUpName';
import ScreenSignUpPassword from './screens/SignUp/SignUpPassword';

const NavigatorMain = createStackNavigator(
  {
    AddEvent: ScreenAddEvent,
    Events: ScreenEvents,
  },
  {
    initialRouteName: 'Events',
  },
);

const NavigatorSignUp = createStackNavigator(
  {
    SignUpEmail: ScreenSignUpEmail,
    SignUpName: ScreenSignUpName,
    SignUpPassword: ScreenSignUpPassword,
  },
  {
    initialRouteName: 'SignUpName',
  },
);

const AppNavigator = createSwitchNavigator(
  {
    Login: ScreenLogin,
    Main: NavigatorMain,
    SignUp: NavigatorSignUp,
  },
  {
    initialRouteName: 'Login',
  },
);

export default AppNavigator;
