import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  StyleSheet,
  StatusBar,
  Alert,
  Switch,
  Animated,
  Easing
} from 'react-native';
import colors from '../../components/theme/colors'
import { Container, Content, } from 'native-base';
import { getLogout } from '../../utilities';


export default class index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        starCount: 3.5,
        isEnabled: false
    };
}

  componentDidMount() {

  }

  componentWillMount() {

  }
  toggleSwitch() {
    if (this.state.isEnabled) {
      this.setState({ isEnabled: false })
    } else {
      this.setState({ isEnabled: true })
    }

  }

  logout = async()=>{
    Alert.alert(
      "About To Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => this.proccesslogout()}
      ],
      { cancelable: false }
    );
    this.setState({ loading: true })
     
  }


  proccesslogout(){
    getLogout()
    setTimeout(() => {
        this.props.navigation.reset({
            index: 0,
            routes: [{ name: 'Welcome' }],
          });
            }, 1000);
  }
  render() {
    return (
      <Container style={{ backgroundColor: '#fff' }}>
        <Content>
          <View style={styles.body}>
            <View style={styles.mainbody}>
              <View style={{ flex: 1, marginLeft: 25, marginRight: 25, }}>


                <View style={{ marginTop: 30 }}>
                  <Text style={[styles.header_test]}>App Settings</Text>
                </View>

                <View style={styles.category_container}>
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>Disable Flowmate</Text>
                    <View style={styles.container}>
                      <Switch
                        trackColor={{ false: "#f4f3f4" , true: "#f4f3f4" }}
                        thumbColor={this.state.isEnabled ? colors.primary_color : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.isEnabled}
                      />
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.setting_text]}>Allow Push Notification</Text>
                    <View style={styles.container}>
                      <Switch
                        trackColor={{ false:  "#f4f3f4" , true: "#f4f3f4" }}
                        thumbColor={this.state.isEnabled ? colors.primary_color : "#f4f3f4"}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={() => this.toggleSwitch()}
                        value={this.state.isEnabled}
                      />
                    </View>
                  </View>
                </View>


                <View style={{ marginTop: 10 }}>
                  <Text style={[styles.header_test]}>Account Settings</Text>
                </View>

                <View style={styles.category_container}>
                <TouchableOpacity onPress={()=> this.props.navigation.navigate('update')}   style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>Manage Account</Text>
                  </TouchableOpacity>
                  <TouchableOpacity  style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>Change Password</Text>
                  </TouchableOpacity>
                  <TouchableOpacity onPress={()=> this.logout()}  style={{ flexDirection: 'row' }}>
                    <Text style={[styles.setting_text]}>Log Out</Text>
                  </TouchableOpacity>
                </View>

                <View style={{ marginTop: 10 }}>
                  <Text style={[styles.header_test]}>About And Support</Text>
                </View>

                <View style={styles.category_container}>
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>Contact Support</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>Contact Us</Text>
                  </View>
                  <View style={{ flexDirection: 'row', marginBottom: 15 }}>
                    <Text style={[styles.setting_text]}>FAQ</Text>
                  </View>

                  <View style={{ flexDirection: 'row', }}>
                    <Text style={[styles.setting_text]}>APP Version</Text>
                  </View>
                  <View style={{ flexDirection: 'row' }}>
                    <Text style={[styles.setting_text]}>V1.0</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </Content>
      </Container>
    );
  }
}



const styles = StyleSheet.create({
  body: {
    width: Dimensions.get('window').width,
    backgroundColor: '#fff'
  },
  mainbody: {
    width: Dimensions.get('window').width,
    flex: 1,
},
header_test: {
    fontSize: 13,
    color: colors.primary_color+'70',
    textAlign: 'left',
    fontFamily: 'Poppins-SemiBold',
    marginLeft: 5,
},
setting_text: {
    fontSize: 13,
    color: colors.primary_color,
    textAlign: 'left',
    fontFamily: 'Poppins-Regular',
    marginLeft: 15,
    flex: 1
},
category_container: {
    marginLeft: 5,
    marginTop: 10,
    paddingBottom: 20,
    paddingTop: 20,
    borderBottomWidth: 0.5,
    borderBottomColor: colors.primary_color+'30',
    borderTopWidth: 0.5,
    borderTopColor:colors.primary_color+'30',
    marginBottom: 20,
    paddingRight:10
}

});