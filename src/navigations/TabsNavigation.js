import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


import Home from '../screens/home/index';
import Search from '../screens/search';
import Profile from '../screens/profile/profile-stack';
import Setting from '../screens/settings/setting-stack';

import { Icon} from 'react-native-elements'
import colors from '../components/theme/colors';




const Tab = createMaterialBottomTabNavigator();

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor={colors.white}
      inactiveColor='grey'
      barStyle={{ backgroundColor: colors.primary_color }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: colors.primary_color,
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
          tabBarColor: colors.primary_color,
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
          tabBarColor:colors.primary_color,
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
          tabBarColor: colors.primary_color,
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