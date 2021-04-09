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
  Easing,
  AsyncStorage
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import * as images from '../../assets';

import { getLogedIn, setLogedIn } from '../../utilities';

export default class Splash extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }


  async componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 5000,
      easing: Easing.linear,
    }).start();

    setTimeout(() => {
      this.initPage();
    }, 3000);
  }




  initPage = async () => {
    var value_ = await getLogedIn()
    console.warn(value_)
    if (value_ == 'login') {
      this.props.navigation.navigate('Welcome');
      //this.props.navigation.navigate('Protected');

    } else if (value_ == null) {
      this.props.navigation.navigate('Welcome');
    }
    else {
      this.props.navigation.navigate('Welcome');
    }

  }


  render() {
    return (
      <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />
        <Animatable.View
          style={[styles.footer, {
          }]}
          animation="fadeInUpBig"
        >

          <View >
          <Image source={images.logo} style={styles.imageStyle} />

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
    backgroundColor:'#000'
  },

  footer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30
  },
});