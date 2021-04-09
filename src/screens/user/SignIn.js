import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    StyleSheet,
    StatusBar,
    Alert,
    Dimensions,

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
import { LoginRequest } from '../../actions/userActions'
import { ImageBackground } from 'react-native';
import * as images from '../../assets';
import ActivityIndicator from '../../components/views/ActivityIndicator';
import { baseUrl, setToken, setRefresheToken, setLogedIn, setUserId, processResponse } from '../../utilities';


class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            email: '',
            password: '',
            is_valide_mail: false,
            secureTextEntry: true
        };
    }


    validate = (text) => {
        let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (reg.test(text) === false) {
            this.setState({ email: text, is_valide_mail: false })
            return false;
        }
        else {
            this.setState({ email: text, is_valide_mail: true })
        }
    }

    updateSecureTextEntry = () => {
        this.setState({ secureTextEntry: this.state.secureTextEntry ? false : true })
    }

    async loginRequest() {
        const { email, password, is_valide_mail } = this.state
        if (email == "" || password == "" || password.length < 8) {
            Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
            return
        }
        if (!is_valide_mail) {
            Alert.alert('Validation failed', 'Email is invalid', [{ text: 'Okay' }])
            return
        }


        this.setState({ loading: true })
        fetch(baseUrl() + 'auth', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }, body: JSON.stringify({
                email: email,
                password: password,
                rememberMe: true,
            }),
        })
            .then(processResponse)
            .then(res => {
                console.warn(res);
                const { statusCode, data } = res;
                console.warn(res)
                if (statusCode == 200) {
                    this.setState({ loading: false })
                    setToken(data.access_token)
                    setRefresheToken(data.refresh_token)
                    setLogedIn('login')
                    setUserId(data.userId)
                    this.props.navigation.navigate('Protected') 

                } else {
                
                    this.setState({ loading: false })
                }
            }).catch((error) => {
                this.setState({ loading: false })
                console.warn(error);
                alert(error.message);
            });



    }


    render() {

        if (this.state.loading) {
            return (
                <ActivityIndicator />
            )
        }
        return (
            <ImageBackground source={images.signin_bg} style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', marginBottom: 15, }}>

                                    <Text style={{ color: colors.white, fontFamily: 'Poppins-Bold', fontSize: 25, marginBottom: 2, marginTop: 2 }}>Sign In</Text>
                                </View>

                                <View style={styles.textInputContainer}>
                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Email "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: colors.white, fontFamily: 'Poppins-Regular', }}
                                            onChangeText={(text) => this.validate(text)}
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

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Password "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: colors.white, fontFamily: 'Poppins-Regular', }}
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
                                                    color={colors.white}
                                                    size={20}
                                                />
                                                :
                                                <Feather
                                                    name="eye"
                                                    color={colors.white}
                                                    size={20}
                                                />
                                            }
                                        </TouchableOpacity>
                                    </View>
                                </View>

                                <View style={{ marginLeft: 20, marginRight: 20, marginBottom: 1, }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={{}}>
                                        <Text style={{ color: colors.white, fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>forgot password ?</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginRequest()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Log in</Text>
                                    </TouchableOpacity>
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.white, fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Not a member?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUP')} style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 13, marginBottom: 7, marginTop: 7 }}>  Join Now!</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Content>
                </Container>
            </ImageBackground>
        );
    };



}


const mapStateToProps = state => {
    state.user.user.hasOwnProperty('access_token') ?
        navigation.navigate('Protected') : null
    return {
        user: state.user
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        LoginPostRequest: (email, password) => dispatch(LoginRequest(email, password))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignInScreen);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
        flex: 1,

    },
    mainbody: {
        width: Dimensions.get('window').width,
        flex: 1,
        backgroundColor: '#26262699',
        justifyContent: 'center'
    },
    textInputContainer: {
        flexDirection: 'row',
        marginRight: 20,
        marginLeft: 20,
        height: 40,
        borderRadius: 12,
        marginBottom: 15,
        marginTop: 5,
        paddingLeft: 12,
        backgroundColor: colors.textinput_bg,
    },
    input: {
        flex: 1,
        marginLeft: 10,
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
        width: Dimensions.get('window').width / 3,
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
