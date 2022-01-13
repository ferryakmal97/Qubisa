import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Login, Menu, Register, Search} from '../pages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {CBottomNavigator} from '../components';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const Hide = {headerShown: false};

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <CBottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={Hide} />
      <Tab.Screen name="Search" component={Search} options={Hide} />
      <Tab.Screen name="Menu" component={Menu} options={Hide} />
    </Tab.Navigator>
  );
};

const Routes = () => {
  return (
    <Stack.Navigator initialRouteName="MainApp">
      <Stack.Screen name="MainApp" component={MainApp} options={Hide} />
      <Stack.Screen name="Login" component={Login} options={Hide} />
      <Stack.Screen name="Register" component={Register} options={Hide} />
    </Stack.Navigator>
  );
};

export default Routes;
