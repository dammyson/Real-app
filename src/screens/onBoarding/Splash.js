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
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useTheme } from '@react-navigation/native';
import LottieView from 'lottie-react-native';




export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }


  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();
  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#009387' barStyle="light-content" />
        <View style={styles.header}>

        <LottieView
        source={require('./animation.json')} autoPlay loop
      />
         {/**
          * <Animatable.Image
            animation="bounceIn"
            duraton="1500"
            source={require('../../assets/splash/logo.png')}
            style={styles.logo}
            resizeMode="stretch"
          />
          */} 
        </View>
        <Animatable.View
          style={[styles.footer, {
            backgroundColor: '#fff'
          }]}
          animation="fadeInUpBig"
        >
          <Text style={[styles.title, {
            color:'grey'
          }]}>Stay connected with everyone!</Text>
          <Text style={styles.text}>Sign in with account</Text>
          <View style={styles.button}>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')}>
              <LinearGradient
                colors={['#08d4c4', '#01ab9d']}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Get Started</Text>
                <MaterialIcons
                  name="navigate-next"
                  color="#fff"
                  size={20}
                />
              </LinearGradient>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    );
  }
}


const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#009387'
  },
  header: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  footer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
  logo: {
    width: height_logo,
    height: height_logo
  },
  title: {
    color: '#05375a',
    fontSize: 30,
    fontWeight: 'bold'
  },
  text: {
    color: 'grey',
    marginTop: 5
  },
  button: {
    alignItems: 'flex-end',
    marginTop: 30
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
    flexDirection: 'row'
  },
  textSign: {
    color: 'white',
    fontWeight: 'bold'
  }
});