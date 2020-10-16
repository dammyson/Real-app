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
import { useTheme } from 'react-native-paper';


import Users from './user';



export default class SignInScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false,
            done: false,
            failed: false,
            pin: false,
            items: [],
            qty: 0,
            amount: 0,
            balance: 0,
            code: [],
            operation_message: '',
            name: '',
            show_share: false,
            details: '',
            is_donor: false,
            is_valide_mail: false,
            secureTextEntry: true,
            agree:false
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

    updateSecureTextEntry = () => {
      this.setState({secureTextEntry: this.state.secureTextEntry ? false : true})
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
                                    <LottieView style={{ width: 180 }}
                                        source={require('./house.json')} autoPlay loop
                                    />
                                </View>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>
                               
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 16, marginBottom: 2, marginTop: 2}}>  Sign UP</Text>
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
                                            placeholder="Confirm Password "
                                            placeholderTextColor='#fff'
                                            returnKeyType="next"
                                            keyboardType="password"
                                            secureTextEntry={this.state.secureTextEntry}
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: '#d1d1d1', fontFamily: 'Poppins-SemiBold', }}
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
                                <View style={[styles.terms_container]}>
                                    {!this.state.agree ?
                                        <TouchableOpacity onPress={() => this.setState({ agree: true , show_terms_error: false })} style={[{height:15, width:15,  justifyContent: 'center', alignItems: 'center',}]}>
                                            <Icon
                                                name="checkbox-passive"
                                                type='fontisto'
                                                size={15}
                                                color={"#d1d1d1"}
                                            />
                                        </TouchableOpacity>
                                        :
                                        <TouchableOpacity onPress={() => this.setState({ agree: false })} style={[{height:15, width:15,  justifyContent: 'center', alignItems: 'center', }]}>
                                            <Icon
                                                name="checkbox-active"
                                                type='fontisto'
                                                size={15}
                                                color={"#d1d1d1"}
                                            />
                                        </TouchableOpacity>
                                    }
                                    <Text style={{ color: colors.white, fontSize: 12, fontWeight: '200', marginLeft: 5 }}>I have read and accepted the </Text>
                                    <TouchableOpacity onPress={() => this.setState({ show_terms: true })} >
                                        <Text style={{ color: colors.primary_color, fontSize: 12, fontWeight: '400' }}>Terms & Conditions  </Text>
                                    </TouchableOpacity>
                                </View>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffcfa2', '#88725e']} style={styles.buttonContainer} block iconLeft>
                                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() => this.setState({ pin: true })} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#415c5a', fontSize: 14 }}>Create account</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: '#d1d1d1', fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Already a member?</Text>
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
