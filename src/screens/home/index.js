import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Explore from './Explore';
import ViewAll from './ViewAll';
import Details from './Details';


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
             initialRouteName="explore">
            <Stack.Screen name="explore" component={Explore}  />
            <Stack.Screen name="viewall" component={ViewAll}  />
            <Stack.Screen name="details" component={Details}  />
          </Stack.Navigator>
        
      );
  }

}
export default AppStack;