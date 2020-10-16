import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from '../../screens/home';
import Search from '../../screens/search';
import Profile from '../../screens/profile';
import Setting from '../../screens/settings';

import { Icon} from 'react-native-elements'
import colors from './../theme/colors';




const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.primary_color}
      inactiveColor='grey'
      barStyle={{ backgroundColor: '#fff' }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
            name="home"
            type='ionicons'
            color={color}
          /> 
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarLabel: 'Search',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
            name="search1"
            type='antdesign'
            color={color}
          />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
              active
              name="user"
              type='entypo'
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Setting}
        options={{
          tabBarLabel: 'Settings',
          tabBarColor: '#fff',
          tabBarIcon: ({ color }) => (
            <Icon
              active
              name="menu"
              type='entypo'
              color={color}
            />
          ),
        }}
      />

    </Tab.Navigator>
);

export default MainTabScreen;