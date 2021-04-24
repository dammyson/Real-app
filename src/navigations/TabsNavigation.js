import React, { Component } from 'react';
import { View, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';


import Home from '../screens/home/index';
import Search from '../screens/search';
import Profile from '../screens/profile/profile-stack';
import Setting from '../screens/settings/setting-stack';
import ViewAll from '../screens/home/ViewAll';


import { Card, colors, Icon, SocialIcon } from 'react-native-elements'
import color from '../components/theme/colors';
import { font } from '../constants';

const Tab = createBottomTabNavigator();

class AppNavigator extends Component {

  render() {

    return (
      <Tab.Navigator

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {

            if (route.name === 'Explore') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    active
                    focused={focused}
                    name="search"
                    type='font-awesome'
                    color={color}
                  />
                  <Text style={{ fontFamily: font.LIGHT, marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center' }}>Explore</Text>
                </View>
              );
            }
            else if (route.name == 'Saved') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    active
                    name="hearto"
                    type='antdesign'
                    color={color}
                  />
                  <Text style={{ fontFamily: font.LIGHT, marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center', }}>Saved</Text>
                </View>
              );
            }
            else if (route.name == 'Invest') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    active
                    name="rocket-outline"
                    type='ionicon'
                    color={color}
                  />
                  <Text style={{ fontFamily: font.LIGHT, marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center', }}>Invest</Text>
                </View>
              );
            } else if (route.name === 'Alerts') {

              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    active
                    name="md-notifications-outline"
                    type='ionicon'
                    color={color}
                  />
                  <Text style={{ fontFamily: font.LIGHT, marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center', }}>Alerts</Text>
                </View>
              );
            } else if (route.name == 'Profile') {
              return (
                <View style={{ width: Dimensions.get('window').width / 5 }}>
                  <Icon
                    active
                    name="user"
                    type='font-awesome'
                    color={color}
                  />
                  <Text style={{ fontFamily: font.LIGHT, marginTop: 1, marginRight: 7, marginLeft: 7, fontSize: 10, color: color, textAlign: 'center', }}>Profile</Text>
                </View>
              );
            }
          },
        })}
        tabBarOptions={{
          activeTintColor: 'black', //'tomato',
          inactiveTintColor: 'gray',
          showLabel: false,
          animationEnabled: true,
          keyboardHidesTabBar:true,
          color: '#FFFFFF',
          tintColor: '#FFFFFF',
          activeTintColor: color.primary_color,
          inactiveTintColor: color.black,
          style: {
            backgroundColor: '#ffffff',
            padding: 5
          },
        }}
      >
        <Tab.Screen navigation={this.props.navigation} name="Explore" component={Home} />
        <Tab.Screen navigation={this.props.navigation} name="Saved" component={Search} />
        <Tab.Screen navigation={this.props.navigation} name="Invest" component={Search} />
        <Tab.Screen name="Alerts" component={Profile} />
        <Tab.Screen navigation={this.props.navigation} name="Profile" component={Setting} />
      </Tab.Navigator>


    );
  }

}

export default AppNavigator;