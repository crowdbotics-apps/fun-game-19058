import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings82521Navigator from '../features/Settings82521/navigator';
import UserProfile82514Navigator from '../features/UserProfile82514/navigator';
import Settings82513Navigator from '../features/Settings82513/navigator';
import Settings82511Navigator from '../features/Settings82511/navigator';
import SignIn282509Navigator from '../features/SignIn282509/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings82521: { screen: Settings82521Navigator },
UserProfile82514: { screen: UserProfile82514Navigator },
Settings82513: { screen: Settings82513Navigator },
Settings82511: { screen: Settings82511Navigator },
SignIn282509: { screen: SignIn282509Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
