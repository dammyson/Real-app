import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Image,
    StyleSheet,
    StatusBar,
    Alert,
    Dimensions
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { Icon } from 'react-native-elements';
import colors from '../../components/theme/colors'
import { Container, Content } from 'native-base';

import * as images from '../../assets';

import ActivityIndicator from '../../components/views/ActivityIndicator';
import { baseUrl, setToken, setRefresheToken, setLogedIn, setUserId, processResponse } from '../../utilities';

export default class ForgetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loading:false,
            email: '',
            show_share: false,
            details: '',
            is_donor: false,
            is_valide_mail: false,

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



    async changePasswordRequest() {

        const { email, is_valide_mail } = this.state
        if (email == "") {
            Alert.alert('Validation failed', 'Email field cannot be empty', [{ text: 'Okay' }])
            return
        }
        if (!is_valide_mail) {
            Alert.alert('Validation failed', 'Email is invalid', [{ text: 'Okay' }])
            return
        }


        this.setState({ loading: true })
        fetch(baseUrl() + 'auth/SendForgotPasswordToken', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }, body: JSON.stringify({
                clientBaseUrl: baseUrl(),
                email: email,
            }),
        })
            .then(processResponse)
            .then(res => {
                console.warn(res);
                const { statusCode, data } = res;
                console.warn(res)
                if (statusCode == 200) {
                    this.setState({ loading: false })
                    this.props.navigation.navigate('ChangePassword') 
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
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>
                                < View style={{flex: 1, justifyContent: 'center', }}>



                                <View style={styles.sideContent}>
                                <Image source={images.lock} style={styles.logoStyle} />
                                </View>
                                </View>
                                <View style={{ marginLeft: 20, marginRight: 20, alignItems: 'center', flexDirection: 'row', marginBottom: 5, }}>

                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-Bold', fontSize: 22, marginBottom: 2, marginTop: 2 }}> Reset Password</Text>
                                </View>

                                < View style={{flex: 1}}>
                              

                                <View style={{ marginLeft: 24, marginRight: 50, flexDirection: 'row', marginBottom: 1, }}>
                                    <Text style={{ color: colors.secondary_color, fontFamily: 'Poppins-Regular', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Enter your email address to begin the verification process. We will send you a link.</Text>
                                </View>


                                <View style={styles.textInputContainer}>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Email "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType="default"
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: '#000', fontFamily: 'Poppins-Regular', }}
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


                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.changePasswordRequest()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Reset Password</Text>
                                    </TouchableOpacity>
                                </View>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', marginBottom: 10, }}>
                                    <View style={{ alignItems: 'center' }}>
                                        <Text style={{ color: colors.primary_color, fontFamily: 'Poppins-Medium', fontSize: 12, marginBottom: 7, marginTop: 7 }}>Go back to Login Page</Text>
                                    </View>

                                </View>


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
        borderRadius: 15,
        marginTop: 20,
        paddingLeft: 12,
        borderWidth: 0.6,
        borderColor: colors.primary_color,
    },
    input: {
        flex: 1,
        justifyContent: 'center',
        marginLeft: 15,
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
    logoStyle: {
        width: Dimensions.get('window').width / 1.3,
        resizeMode:'contain'
 
     },
});
