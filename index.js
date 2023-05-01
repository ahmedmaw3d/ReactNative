/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import App from './App'
import GreenScreen from './GreenScreen';
import EditProfile from './EditProfile';
import LoganIn from './LoganIn';



AppRegistry.registerComponent(appName, ()=> EditProfile);
