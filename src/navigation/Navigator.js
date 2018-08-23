import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import ScreenAddEvent from '../containers/AddEvent';
import ScreenEvents from '../containers/Events';
import ScreenLogin from '../containers/Login';

import ScreenSignUpEmail from '../containers/SignUp/SignUpEmail';
import ScreenSignUpName from '../containers/SignUp/SignUpName';
import ScreenSignUpPassword from '../containers/SignUp/SignUpPassword';

const NavigatorMain = createStackNavigator(
  {
    AddEvent: ScreenAddEvent,
    Events: ScreenEvents
  },
  {
    initialRouteName: 'Events'
  }
);

const NavigatorSignUp = createStackNavigator(
  {
    SignUpEmail: ScreenSignUpEmail,
    SignUpName: ScreenSignUpName,
    SignUpPassword: ScreenSignUpPassword
  },
  {
    initialRouteName: 'SignUpName'
  }
);

const AppNavigator = createSwitchNavigator(
  {
    Login: ScreenLogin,
    Main: NavigatorMain,
    SignUp: NavigatorSignUp
  },
  {
    initialRouteName: 'Login'
  }
);

export default AppNavigator;
