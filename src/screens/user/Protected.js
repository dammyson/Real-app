/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, StatusBar, KeyboardAvoidingView, View} from 'react-native';
import colors from '../../components/theme/colors'
import AppNavigator from '../../navigations/TabsNavigation';



export default class Protected extends Component{
 
  render() {
    return (
      <>
        <StatusBar backgroundColor={colors.primary_color} barStyle="dark-content" />
       <AppNavigator/>
      </>
      
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});