import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image,
  Animated, 
  Easing
} from 'react-native';





export default class index extends React.Component {

  componentDidMount() {
   
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#415c5a' barStyle="light-content" />
       <Text>Setting</Text>
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#415c5a'
  },
  
});