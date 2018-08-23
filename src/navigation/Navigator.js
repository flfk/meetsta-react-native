import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import ScreenAddEvent from '../containers/ScreenAddEvent';
import ScreenEvents from '../containers/ScreenEvents';
import ScreenLogin from '../containers/ScreenLogin';

import ScreenSignUpEmail from '../containers/SignUp/ScreenSignUpEmail';
import ScreenSignUpName from '../containers/SignUp/ScreenSignUpName';
import ScreenSignUpPassword from '../containers/SignUp/ScreenSignUpPassword';

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
