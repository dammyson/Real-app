import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    AsyncStorage,
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
import { baseUrl, getToken, getUserId, processResponse } from '../../utilities';




export default class Account extends Component {
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
        console.warn(await getUserId())
        this.setState({ loading: true })
        fetch(baseUrl() + 'users/' + await getUserId(), {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
                'Authorization': 'Bearer ' + await getToken(),
            },
        })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                console.warn(statusCode, data)
                AsyncStorage.setItem('user',  JSON.stringify(data));
                this.setState({ user: data })
            }).catch((error) => {
                this.setState({ loading: false })
                alert('No Internet Connection. Please Check your network');
            });
    }

    processStepOne() {
        this.props.navigation.navigate('update')
    }


    render() {

        const {user}=this.state
        return (
            <View style={styles.container}>
                <StatusBar backgroundColor='#fff' barStyle="dark-content" />
                <Container style={{ backgroundColor: 'transparent' }}>


                    <Content>
                        <View style={styles.backgroundImage}>
                            <View style={styles.mainbody}>

                                <View style={{ marginHorizontal: 20, marginTop: 40, justifyContent: 'center', alignItems: 'center', marginBottom: 5, }}>
                                    <Image source={{
                                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                                    }} style={styles.image_profile} />
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 16, }}> Account Details</Text>
                                    <Text style={{ color: colors.placeholder_color, fontFamily: 'Poppins-Regular', fontSize: 12, }}>Edit Profile</Text>
                                </View>



                                <View style={styles.textInputContainer}>
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 14, }}> Phone-No</Text>
                                    <View style={styles.input}>
                                        <Text style={{ fontSize: 12, color: '#22222270', fontFamily: 'Poppins-SemiBold', }}>
                                            {user.phoneNumber}
                                            </Text>
                                    </View>

                                </View>

                                <View style={styles.textInputContainer}>
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 14, }}> Email</Text>
                                    <View style={styles.input}>
                                        <Text style={{ fontSize: 12, color: '#22222270', fontFamily: 'Poppins-SemiBold', }}>
                                        {user.email}
                                            </Text>
                                    </View>

                                </View>


                                <View style={styles.textInputContainer}>
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 14, }}> Name</Text>
                                    <View style={styles.input}>
                                        <Text style={{ fontSize: 12, color: '#22222270', fontFamily: 'Poppins-SemiBold', }}>
                                        {user.firstName}  {user.lastName}
                                            </Text>
                                    </View>

                                </View>


                                <View style={styles.textInputContainer}>
                                    <Text style={{ color: colors.black, fontFamily: 'Poppins-SemiBold', fontSize: 14, }}>Address</Text>
                                    <View style={styles.input}>
                                        <Text style={{ fontSize: 12, color: '#22222270', fontFamily: 'Poppins-SemiBold', }}>
                                        {user.phone}
                                            </Text>
                                    </View>

                                </View>




                                <View style={{ marginLeft: 20, marginRight: 20, flexDirection: 'row', marginBottom: 1, justifyContent: 'center', }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.processStepOne()} >
                                        <Icon
                                            name="edit"
                                            color="#fff"
                                            size={30}
                                            type='antdesign'


                                        />
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
        marginRight: 30,
        marginLeft: 30,
        borderColor: '#3E3E3E',
        marginBottom: 15,
        marginTop: 10,
        borderBottomWidth: 0.6,
        borderBottomColor: colors.primary_color,
    },
    input: {
        marginLeft: 1,
        height: 35,
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
        width: 60,
        height: 60,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 13,
        borderRadius: 50,
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
