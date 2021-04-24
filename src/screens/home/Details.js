import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, StatusBar, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Button, Left, } from 'native-base';
import colors from '../../components/theme/colors'
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';


export default class Details extends Component {
    static navigationOptions = {
        title: "Action disabled"
    };

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
        };
    }
    componentDidMount() {

    }
    onPressSearchHandler() {

    }

    
    render() {

        return (
            <Container style={{}}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle="dark-content" />
                <Content>
                    <View style={styles.backgroundImage}>
                        <View style={styles.mainbody}>
                            <ImageBackground
                                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width, }}
                                source={{ uri: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c8/35/4f.jpg' }}
                                imageStyle={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
                            >
                                <View style={{ justifyContent: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').width, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }} >
                                    <View style={{  justifyContent: 'center', alignItems: 'center',  }} >

                                        <View style={{ flex: 1, backgroundColor: '#f3f3f3'}}>
                                            <ActionButton buttonColor="rgba(231,76,60,1)">
                                                <ActionButton.Item buttonColor='#9b59b6' title="New Task" onPress={() => console.log("notes tapped!")}>
                                                    <Icon
                                                        active
                                                        name="location-pin"
                                                        type='entypo'
                                                        color={colors.primary_color}
                                                        size={15}
                                                    />
                                                </ActionButton.Item>
                                                <ActionButton.Item buttonColor='#3498db' title="Notifications" onPress={() => { }}>
                                                    <Icon
                                                        active
                                                        name="location-pin"
                                                        type='entypo'
                                                        color={colors.primary_color}
                                                        size={15}
                                                    />
                                                </ActionButton.Item>
                                                <ActionButton.Item buttonColor='#1abc9c' title="All Tasks" onPress={() => { }}>
                                                    <Icon
                                                        active
                                                        name="location-pin"
                                                        type='entypo'
                                                        color={colors.primary_color}
                                                        size={15}
                                                    />
                                                </ActionButton.Item>
                                            </ActionButton>
                                        </View>

                                    </View>
                                </View>

                            </ImageBackground>


                            <View style={styles.container}>

                            </View>
                        </View>

                    </View>


                </Content>
            </Container>
        )
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF'
    },
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fff'
    },
    backgroundImage: {
        width: Dimensions.get('window').width,
    },
    mainbody: {
        flex: 1,
        justifyContent: 'center',
    },
    secondSearchTextInputContainer: {
        flexDirection: 'row',
        height: 45,
        marginBottom: 15,
        marginTop: 5,
        marginHorizontal: 20,
        borderColor: colors.primary_color,
        borderWidth: 1,
        borderRadius: 11
    },
    operation_icon: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
        flex: 1,
        marginLeft: 5,
    },
});
