import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Settings from './index';


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
             initialRouteName="index">

            <Stack.Screen name="index" component={Settings}  />
          </Stack.Navigator>
        
      );
  }

}
export default AppStack;