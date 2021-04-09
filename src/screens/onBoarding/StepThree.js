import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Image
} from 'react-native';
import { Icon } from 'native-base';
import colors from '../../components/theme/colors'
import * as images from '../../assets';



export default class StepOne extends React.Component {


  onSwipeLeft() {
    this.props.navigation.navigate("StepTwo")
  }

  render() {
    const { onStarted, onSignIn, } = this.props;
    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          backgroundColor={'#fff'}
          barStyle="dark-content"
        />
        <View>

          <View style={styles.imageRegion}>
            <Image source={images.complete} style={styles.imageStyle} />
          </View>


          <View style={styles.actionRegion}>
          <View style={{ flex:1 }}>
            <View style={styles.dotsRegion}>
              <View style={{ height: 10, width: 32, borderRadius: 10, marginHorizontal: 5, backgroundColor: colors.primary_color }} />
              <View style={{ height: 10, width: 10, borderRadius: 10, backgroundColor: colors.primary_color }} />
              <View style={{ height: 10, width: 10, borderRadius: 10, marginHorizontal: 5, backgroundColor: colors.primary_color }} />

            </View>

            <View style={{ marginHorizontal: 20, marginTop: 20 }}>
              <Text style={styles.titleText}>About Realthub </Text>
              <Text style={styles.bodyText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </Text>
            </View>
          </View>
          </View>
          <View style={{ height: 100, alignItems: 'center',justifyContent:'center' }}>
          <TouchableOpacity style={styles.buttonContainer} onPress={() =>  onStarted()} >
                <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}> Search Properties </Text>
              </TouchableOpacity>
          </View>
         
        </View>
      </View>
    );
  }
}
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
  },
  imageRegion: {
    marginTop: 40,
    flex: 1,
    width: width,

  },
  imageStyle: {
    alignSelf: 'center',
    resizeMode:'contain',
    height: height * 0.45
  },
  actionRegion: {
    flex: 1,

  },
  dotsRegion: {
    width: width - 40,
    flexDirection: 'row',
    marginHorizontal: 20,
    alignItems: 'flex-start'
  },
  titleText: {
    fontSize: 30,
    color: colors.primary_color,
    fontFamily: 'Poppins-Bold'
  },
  bodyText: {
    fontSize: 12,
    color: colors.black,
    fontFamily: 'Poppins-Medium'
  },

  signInText: {
    fontSize: 15,
    color: "red",
    fontFamily: 'Montserrat-Medium'
  },

  skipRegion: {
    flexDirection: 'row',
  },
  skipIconStyle: {
    color: "red",
    fontSize: 12,
    marginHorizontal: 10,
    alignSelf: 'flex-end',
  },
  skipText: {
    fontSize: 15,
    color: "red",
    fontFamily: 'Poppins-SemiBold',
    marginTop: 20
  },

  nextIconStyle: {
    color: "red",
    fontSize: 20,
    marginHorizontal: 8
  },
  actionbutton: {
    marginTop: 7,
    marginBottom: 2,
    opacity: 0.5,
    fontSize: 14,
    color: '#0F0E43',
    textAlign: 'left',
    fontFamily: 'Poppins-Regular'
  },
  buttonContainer: {
    width: Dimensions.get('window').width / 2,
    height: 50,
    marginRight: 30,
    marginLeft: 30,
    marginTop: 13,
    borderRadius: 15,
    backgroundColor: colors.primary_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
