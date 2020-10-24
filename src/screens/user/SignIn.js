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



class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
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
        const { LoginPostRequest } = this.props
        const { email, password, is_valide_mail } = this.state
        if (email == "" || password == "" || password.length < 8) {
            Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
            return
        }
        if (!is_valide_mail) {
            Alert.alert('Validation failed', 'Email is invalid', [{ text: 'Okay' }])
            return
        }
        LoginPostRequest(email, password);
    }


    render() {


        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#415c5a' barStyle="light-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>



                                <View style={styles.sideContent}>
                                    <LottieView style={{ width: 250 }}
                                        source={require('./house.json')} autoPlay loop
                                    />
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>

                                    <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 16, marginBottom: 2, marginTop: 2 }}>Sign In</Text>
                                </View>

                                <View style={styles.textInputContainer}>
                                    <View style={styles.text_icon}>
                                        <Icon
                                            name="email"
                                            size={20}
                                            type='entypo'
                                            color={colors.primary_color}

                                        />
                                    </View>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Email "
                                            placeholderTextColor='#fff'
                                            returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: '#d1d1d1', fontFamily: 'Poppins-SemiBold', }}
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
                                            placeholder="Password "
                                            placeholderTextColor='#fff'
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: '#d1d1d1', fontFamily: 'Poppins-SemiBold', }}
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

                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, }}>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('ForgetPassword')} style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={{ color: '#d1d1d1', fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Can't log in?</Text>
                                    </TouchableOpacity>
                                </View>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffcfa2', '#88725e']} style={styles.buttonContainer} block iconLeft>
                                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.loginRequest()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#415c5a', fontSize: 14 }}>Log in</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: '#d1d1d1', fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Not a member?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() => this.props.navigation.navigate('SignUP')} style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 13, marginBottom: 7, marginTop: 7 }}>  Join Now!</Text>
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
        backgroundColor: '#415c5a'
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
        borderBottomColor: '#d1d1d1',
    },
    input: {
        flex: 1,
        marginLeft: 15,
    },
    text_icon: {
        padding: 10,
        borderRightWidth: 0.6,
        borderRightColor: '#d1d1d1',
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
});
