import { createSwitchNavigator, createStackNavigator } from 'react-navigation';

import ScreenAddTicket from '../containers/ScreenAddTicket';
import ScreenTickets from '../containers/ScreenTickets';
import ScreenLogin from '../containers/ScreenLogin';

import ScreenSignUpEmail from '../containers/SignUp/ScreenSignUpEmail';
import ScreenSignUpName from '../containers/SignUp/ScreenSignUpName';
import ScreenSignUpPassword from '../containers/SignUp/ScreenSignUpPassword';

const NavigatorMain = createStackNavigator(
  {
    AddTicket: ScreenAddTicket,
    Events: ScreenTickets
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
