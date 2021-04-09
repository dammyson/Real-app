import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    ImageBackground,
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
import { useTheme } from 'react-native-paper';
import { baseUrl, processResponse } from '../../utilities';
import * as images from '../../assets';

import Users from './user';
import ActivityIndicator from '../../components/views/ActivityIndicator';



export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            operation_message: '',
            email: '',
            password: '',
            confirm_password: '',
            is_valide_mail: false,
            secureTextEntry: true,
            agree: false
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

    processStepOne() {
        const { email, password, confirm_password, is_valide_mail, agree } = this.state
        console.warn( email, password, confirm_password, is_valide_mail, agree)
        if (email == "" || password == "" || password.length < 8) {
            Alert.alert('Validation failed', 'All fields must be filled', [{ text: 'Okay' }])
            return
        }
        if (!is_valide_mail) {
            Alert.alert('Validation failed', 'Email is invalid', [{ text: 'Okay' }])
            return
        }
        if (confirm_password != password) {
            Alert.alert('Validation failed', 'Passwords does not match', [{ text: 'Okay' }])
            return
        }
        if (!agree) {
            Alert.alert('Validation failed', 'You must accept or termps and conditions', [{ text: 'Okay' }])
            return
        }
        var payload = { email: email, password: password, confirm_password: confirm_password }
        this.props.navigation.navigate('SignUpTwo', payload)
    }


    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            )
        }

        return (
            <ImageBackground source={images.signup_bg} style={{ flex: 1 }}>
                <StatusBar translucent backgroundColor='transparent' barStyle="light-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>


                                <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>
                                    <Text style={{ color: colors.white, fontFamily: 'Poppins-Bold', fontSize: 20, marginBottom: 2, marginTop: 2 }}>  Sign UP</Text>
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
                                            defaultValue={this.state.email}
                                            style={{ flex: 1, fontSize: 12, color: colors.white, fontFamily: 'Poppins-Regular', }}
                                            onChangeText={(text) => this.validate(text)}
                                            onSubmitEditing={() => this.passwordInput.focus()}
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
                                            defaultValue={this.state.password}
                                            style={{ flex: 1, fontSize: 12, color: colors.white, fontFamily: 'Poppins-Regular', }}
                                            ref={(input) => this.passwordInput = input}
                                            onChangeText={text => this.setState({ password: text })}
                                            onSubmitEditing={() => this.cpasswordInput.focus()}
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


                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Confirm Password "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            defaultValue={this.state.confirm_password}
                                            style={{ flex: 1, fontSize: 12, color: colors.white, fontFamily: 'Poppins-Regular', }}
                                            ref={(input) => this.cpasswordInput = input}
                                            onChangeText={text => this.setState({ confirm_password: text })}
                                            onSubmitEditing={() => this.processStepOne()}
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
                                <View style={[styles.terms_container]}>
                                    {!this.state.agree ?
                                        <TouchableOpacity onPress={() => this.setState({ agree: true, show_terms_error: false })} style={[{ height: 15, width: 15, justifyContent: 'center', alignItems: 'center', }]}>
                                            <Icon
                                                name="checkbox-passive"
                                                type='fontisto'
                                                size={15}
                                                color={colors.white}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.setState({ agree: false })} style={[{ height: 15, width: 15, justifyContent: 'center', alignItems: 'center', }]}>
                                            <Icon
                                                name="checkbox-active"
                                                type='fontisto'
                                                size={15}
                                                color={colors.white}
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={{ color: colors.white, fontSize: 12, fontWeight: '200', marginLeft: 5 }}>I have read and accepted the </Text>
                                    <TouchableOpacity onPress={() => this.setState({ show_terms: true })} >
                                        <Text style={{ color: colors.white, fontFamily: 'Poppins-SemiBold', fontSize: 12, fontWeight: '400' }}>Terms & Conditions  </Text>
                                    </TouchableOpacity>
                                </View>


                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.processStepOne()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Next</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.white, fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Already a member?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignIn')} style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.white, fontFamily: 'Poppins-Bold', fontSize: 13, marginBottom: 7, marginTop: 7 }}>  Sign In!</Text>
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



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
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
    text_icon: {
        padding: 10,
        borderRightWidth: 0.6,
        borderRightColor: colors.primary_color,
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
