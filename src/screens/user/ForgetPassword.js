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



export default class ForgetPassword extends Component {
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
            secureTextEntry: true
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
                                    <LottieView style={{ width: 200 }}
                                        source={require('./house.json')} autoPlay loop
                                    />
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>
                               
                               <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Bold', fontSize: 16, marginBottom: 2, marginTop: 2}}> Can't log in?</Text>
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
                                            keyboardType="numeric"
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

                               
                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, }}>
                                    <TouchableOpacity onPress={() => goBack()} style={{ flex: 1, alignItems: 'center' }}>
                                        <Text style={{ color: '#d1d1d1', fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>We'll send a recovery link to Email</Text>
                                    </TouchableOpacity>
                                </View>
                                <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} colors={['#ffcfa2', '#88725e']} style={styles.buttonContainer} block iconLeft>
                                    <TouchableOpacity style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }} onPress={() =>this.props.navigation.navigate('ChangePassword')} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#415c5a', fontSize: 14 }}>Continue</Text>
                                    </TouchableOpacity>
                                </LinearGradient>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: '#d1d1d1', fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>No Need?</Text>
                                    </View>
                                    <TouchableOpacity onPress={() =>this.props.navigation.navigate('SignUP')} style={{ alignItems: 'center' }}>
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
});