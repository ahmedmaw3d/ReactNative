/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import App from './App'
import GreenScreen from './GreenScreen';
import EditProfile from './EditProfile';
import LoginScreen from './LoginScreen';
import SnapApp from'./SnapApp';
import SkipApp from'./SkipApp';



AppRegistry.registerComponent(appName, ()=> SnapApp);
