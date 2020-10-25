import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import colors from '../../components/theme/colors'
import { Container, Content } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { navigation } from '../../../rootNavigation'
import { connect } from 'react-redux'
import { ChangePasswordRequest } from '../../actions/userActions'
import { getToken, } from '../../utilities';

class ChangePassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
          
            code: '',
            password: '',
            confirm_password: '',
        };
    }


    validate = (text) => {
        console.log(text);
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            console.warn("Email is Not Correct");
            this.setState({ email: text, is_valide_mail: false })
            return false;
        }
        else {
            this.setState({ email: text, is_valide_mail: true })
            console.warn("Email is Correct");
        }
    }

    async ChangePasswordRequest() {

        const { code, password, confirm_password,  } = this.state
        if (code == "" || password == "" || password.length < 8) {
            Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
            return
        }
        if (confirm_password != password) {
            Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
            return
        }

        var formData = JSON.stringify({
            code: code,
            password: password,
            password_confirmation: confirm_password,
        });
        const { ChangePasswordPostRequest } = this.props
        ChangePasswordPostRequest(formData,await getToken())
      }

    render() {


        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>



                                <View style={styles.sideContent}>
                                    <LottieView style={{ width: 180 }}
                                        source={require('./house.json')} autoPlay loop
                                    />
                                </View>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>
                               
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 16, marginBottom: 2, marginTop: 2}}>  Change Password</Text>
                                </View>

                                <View style={styles.textInputContainer}>
                                    <View style={styles.text_icon}>
                                    <Icon
                                            name="locked"
                                            size={20}
                                            type='fontisto'
                                            color={colors.primary_color}

                                        />
                                    </View>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Code "
                                            placeholderTextColor={ colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="numeric"
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color:  colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            onChangeText={text => this.setState({ code: text })}
                                        />
                                    </View>


                                    <View style={styles.operation_icon}>
                                        {this.state.is_valide_mail ?
                                            <Animatable.View
                                                animation="bounceIn"
                                            >
                                                <Icon
                                                    name="check-circle"
                                                    color="green"
                                                    size={20}
                                                    type='feather'


                                                />
                                            </Animatable.View>
                                            : null}

                                    </View>
                                </View>

                                <View style={styles.textInputContainer}>
                                    <View style={styles.text_icon}>
                                        <Icon
                                            name="locked"
                                            size={20}
                                            type='fontisto'
                                            color={colors.primary_color}

                                        />
                                    </View>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="New Password "
                                            placeholderTextColor={ colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color:  colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            onChangeText={text => this.setState({ password: text })}
                                        />
                                    </View>

                                    <View style={styles.operation_icon}>
                                        <TouchableOpacity
                                            onPress={() => this.updateSecureTextEntry()}
                                        >
                                            {!this.state.secureTextEntry ?
                                                <Feather
                                                    name="eye-off"
                                                    color="grey"
                                                    size={20}
                                                />
                                                :
                                                <Feather
                                                    name="eye"
                                                    color="grey"
                                                    size={20}
                                                />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={styles.textInputContainer}>
                                    <View style={styles.text_icon}>
                                        <Icon
                                            name="locked"
                                            size={20}
                                            type='fontisto'
                                            color={colors.primary_color}

                                        />
                                    </View>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Confirm New Password "
                                            placeholderTextColor={ colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color:  colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            onChangeText={text => this.setState({ confirm_password: text })}
                                        />
                                    </View>

                                    <View style={styles.operation_icon}>
                                        <TouchableOpacity
                                            onPress={() => this.updateSecureTextEntry()}
                                        >
                                            {!this.state.secureTextEntry ?
                                                <Feather
                                                    name="eye-off"
                                                    color="grey"
                                                    size={20}
                                                />
                                                :
                                                <Feather
                                                    name="eye"
                                                    color="grey"
                                                    size={20}
                                                />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>
                              
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={[ colors.primary_color,  colors.primary_color]} style={styles.buttonContainer} block iconLeft>
                                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.ChangePasswordRequest()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Continue</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color:  colors.secondary_color, fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Want to cancel this ?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignIn')} style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 13, marginBottom: 7, marginTop: 7 }}>  Sign In!</Text>
                                    </TouchableOpacity>
                                </View>


                            </View>
                        </View>


                    </Content>
                </Container>

            </View>
        );
    };

}

const mapStateToProps = state => {
    state.user.user.message =='SignIn' ?
    navigation.navigate('ChangePassword') : null 
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        ChangePasswordPostRequest: (email, token) => dispatch(ChangePasswordRequest(email, token))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChangePassword);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    mainbody: {
        width: Dimensions.get('window').width,
        flex: 1,
        justifyContent: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        marginRight: 30,
        marginLeft: 30,
        height: 40,
        borderColor: '#3E3E3E',
        marginBottom: 15,
        marginTop: 20,
        paddingLeft: 12,
        borderBottomWidth: 0.6,
        borderBottomColor:  colors.primary_color,
    },
    input: {
        flex: 1,
        marginLeft: 15,
    },
    text_icon: {
        padding: 10,
        borderRightWidth: 0.6,
        borderRightColor:  colors.primary_color,
        alignItems: 'center',
        justifyContent: 'center',
    },
    operation_icon: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    sideContent: {
        alignItems: 'center',
        justifyContent: 'center',
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
        height: 50,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 13,
        borderRadius: 15,
    },
    terms_container: {
        flexDirection: 'row',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
