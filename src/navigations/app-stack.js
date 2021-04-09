import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Root } from 'native-base';
import Splash from '../screens/onBoarding/Splash';
import SignUP from '../screens/user/SignUp';
import SignIn from '../screens/user/SignIn';
import Welcome from '../screens/onBoarding/Welcome';
import ForgetPassword from '../screens/user/ForgetPassword';
import ChangePassword from '../screens/user/ChangePassword';
import Protected from '../screens/user/Protected';
import SignUpTwo from '../screens/user/SignUpTwo';
import { navigationRef } from '../../rootNavigation'
import NotificationScreen from '../screens/NotificationTab'
import Update from '../screens/user/Update';


//console.disableYellowBox = true;

class AppStack extends Component {

  render() {
    const Stack = createStackNavigator();
    return (
      <Root>
        <NavigationContainer ref={navigationRef} >
      
          <Stack.Navigator
          screenOptions={{ 
              gestureEnabled: false,
              headerTintColor: 'white',
              headerStyle: { backgroundColor: '#7862ff' }, 
              headerShown: false,
             }}
             initialRouteName="Splash">

            <Stack.Screen name="Splash" component={Splash}  />
            <Stack.Screen name="Welcome" component={Welcome}  />
            <Stack.Screen name="SignIn" component={SignIn}  />
            <Stack.Screen name="SignUP" component={SignUP}  />
            <Stack.Screen name="SignUpTwo" component={SignUpTwo}  />
            <Stack.Screen name="ForgetPassword" component={ForgetPassword}  />
            <Stack.Screen name="ChangePassword" component={ChangePassword}  />
            <Stack.Screen name="update" component={Update}  />
            <Stack.Screen name="Protected" component={Protected}  />
            <Stack.Screen name="NotificationScreen" component={NotificationScreen}  />
        
          </Stack.Navigator>
        </NavigationContainer>
        </Root>
      );
  }

}
export default AppStack;