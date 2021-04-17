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
import LinearGradient from 'react-native-linear-gradient';
import { Icon } from 'react-native-elements';
import LottieView from 'lottie-react-native';
import colors from '../../components/theme/colors'
import { Container, Content } from 'native-base';
import Feather from 'react-native-vector-icons/Feather';
import { useTheme } from 'react-native-paper';
import { getUser } from '../../utilities';





export default class Update extends Component {
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
            agree: false,
            user:{
                phoneNumber:'',
                email:'',
                address:'',
                firstName:'',
                lastName:''
            }
        };
    }

    componentDidMount() {
        this.getUser()
    }

    async getUser() {
        this.setState({ user:  JSON.parse(await getUser()) })
    }

    processReset() {
        this.setState({ 
            user: {
                phoneNumber:'',
                email:'',
                address:'',
                firstName:'',
                lastName:''
            }  
         })
    }

   async processStepOne() {
        const { user } = this.state


        if (user.address == "" || user.phoneNumber == "" || user.firstName == "" || user.lastName == "" ) {
            Alert.alert('Validation failed', 'Phone field cannot be empty', [{ text: 'Okay' }])
            return
        }

        const formData = new FormData();
        formData.append('firstName', user.firstName);
        formData.append('lastName', user.lastName);
        formData.append('phoneNumber', user.phoneNumber);
        formData.append('address', user.address);
       
        this.setState({ loading: true })
        fetch(baseUrl() + 'users/' + await getUserId(), {
            method: 'PUT', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + await getToken(),
            },body: formData,
        })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.warn(statusCode, data)
                this.props.navigation.goBack()
                //AsyncStorage.setItem('user',  JSON.stringify(data));
                this.setState({ user: data })
            }).catch((error) => {
                this.props.navigation.goBack()
                this.setState({ loading: false })
                alert('No Internet Connection. Please Check your network');
            });
       

       
    }


    render() {


        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
                <Container style={{ backgroundColor: 'transparent' }}>
                    <View style={{ marginHorizontal: 20, height: 60, alignItems: 'flex-start', justifyContent: 'center', marginBottom: 5, }}>
                        <TouchableOpacity onPress={()=>this.props.navigation.goBack()}>
                        <Icon
                            name="arrowleft"
                            color="black"
                            size={30}
                            type='antdesign'
                        />
                        </TouchableOpacity>
                       
                    </View>

                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>

                                <View style={{ marginLeft: 20, marginRight: 20, justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={styles.image_profile} />
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 16, }}> Account Details</Text>
                                    <Text style={{ color: colors.placeholder_color, fontFamily: 'Poppins-Regular', fontSize: 12, }}>Edit Profile</Text>
                                </View>

                                <View style={styles.textInputContainer}>


                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Address "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            defaultValue={this.state.user.address}
                                            style={{ flex: 1, fontSize: 12, color: colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            onSubmitEditing={() => this.passwordInput.focus()}
                                        />
                                    </View>
                                </View>

                                <View style={styles.textInputContainer}>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Phone "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType='default'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            defaultValue={this.state.user.phoneNumber}
                                            style={{ flex: 1, fontSize: 12, color: colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            onChangeText={(text) => this.setState({ phone: text })}
                                            onSubmitEditing={() => this.fnameInput.focus()}
                                        />
                                    </View>

                                </View>

                                <View style={styles.textInputContainer}>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="First Name "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            ref={(input) => this.fnameInput = input}
                                            defaultValue={this.state.user.firstName}
                                            onChangeText={(text) => this.setState({ fname: text })}
                                            onSubmitEditing={() => this.lnameInput.focus()}

                                        />
                                    </View>

                                </View>

                                <View style={styles.textInputContainer}>

                                    <View style={styles.input}>
                                        <TextInput
                                            placeholder="Last Name "
                                            placeholderTextColor={colors.placeholder_color}
                                            returnKeyType="next"
                                            keyboardType='email-address'
                                            autoCapitalize="none"
                                            autoCorrect={false}
                                            style={{ flex: 1, fontSize: 12, color: colors.primary_color, fontFamily: 'Poppins-SemiBold', }}
                                            ref={(input) => this.lnameInput = input}
                                            defaultValue={this.state.user.lastName}
                                            onChangeText={(text) => this.setState({ lname: text })}
                                            onSubmitEditing={() => this.SignUpRequest()}
                                        />
                                    </View>
                                </View>



                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, justifyContent: 'center', }}>

                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.processUpdate()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Save</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.processReset()} >
                                        <Text style={{ fontFamily: 'Poppins-SemiBold', color: '#fff', fontSize: 14 }}>Reset</Text>
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
        backgroundColor: '#FFF'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,

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
        height: 45,
        borderColor: '#3E3E3E',
        marginBottom: 15,
        marginTop: 10,
        paddingLeft: 12,
        borderWidth: 0.6,
        borderRadius: 10,
        borderColor: colors.primary_color,
    },
    input: {
        flex: 1,
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
        width: Dimensions.get('window').width / 3,
        height: 40,
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
    image_profile: {
        width: 120,
        height: 120,
        borderRadius: 150,
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 5
    },
});
