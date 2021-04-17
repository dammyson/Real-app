import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Update from './Update';
import Account from './Account';


//console.disableYellowBox = true;

class AppStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
     
      
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#7862ff' }, 
              headerShown: false,
             }}
             initialRouteName="account">

         
            <Stack.Screen name="update" component={Update}  />
            <Stack.Screen name="account" component={Account}  />
          </Stack.Navigator>
        
      );
  }

}
export default AppStack;