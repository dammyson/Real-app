import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, StatusBar, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Button, Left, } from 'native-base';
import colors from '../../components/theme/colors'
import { Icon } from 'react-native-elements';
import ActionButton from 'react-native-action-button';
import { font } from '../../constants'
import { baseUrl, getToken, processResponse, showTopNotification } from '../../utilities';
import ActivityIndicator from '../../components/views/ActivityIndicator';
import Swiper from 'react-native-swiper'
export default class Details extends Component {
    static navigationOptions = {
        title: "Action disabled"
    };

    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            id: this.props.route.params.id,
            images:[],
            details: {}
        };
    }
    componentDidMount() {
        this.getPropertiesById()
    }
    onPressSearchHandler() {

    }


    async getPropertiesById() {
        this.setState({ loading: true })


        fetch(baseUrl() + 'properties/' + this.state.id, {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then(processResponse)
            .then(res => {
                this.setState({ loading: false })
                const { statusCode, data } = res

                console.warn(data.images[0])
                if (statusCode == 200) {

                    this.setState({
                        details: data,
                        images:data.images
                    })

                } else {
                    this.setState({ loading: false })
                    showTopNotification("danger", res.data.message)

                }
            })
            .catch((error) => {
                this.setState({ loading: false })
                console.warn(error.message)
                showTopNotification("danger", error.message)
            });


    }
    currencyFormat(n) {
        return parseFloat(n).toFixed(2).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,");
    }

    render() {
        if (this.state.loading) {
            return (
                <ActivityIndicator />
            )
        }

        const { details , images} = this.state

        return (
            <Container style={{}}>
                <StatusBar translucent backgroundColor={"transparent"} barStyle="dark-content" />
                <Content>
                    <View style={styles.backgroundImage}>
                        <View style={styles.mainbody}>

                          
                            <ImageBackground
                                style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width - 100, }}
                                source={{ uri: images[2] }}
                                imageStyle={{ borderBottomRightRadius: 50,backgroundColor: 'blue' , borderBottomLeftRadius: 50 }}
                            >
                                <View style={{ justifyContent: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').width, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }} >
                                    <View style={{ justifyContent: 'center', alignItems: 'center', }} >



                                    </View>
                                </View>
                                <TouchableOpacity style={{
                                    height: 50,
                                    width: 50,
                                    justifyContent: 'center', alignItems: 'center',
                                    borderRadius: 50,
                                    backgroundColor: colors.primary_color,
                                    margin: 10,
                                    position: 'absolute',
                                    bottom: -30,
                                    right: 30
                                }}>
                                    <Icon
                                        name="keyboard-arrow-up"
                                        color={colors.white}
                                        size={25}
                                        type='material'
                                    />
                                </TouchableOpacity>
                            </ImageBackground>


                            <View style={styles.container}>
                                <Text numberOfLines={2} style={{ marginRight: 13, marginTop: 37, marginLeft: 13, fontSize: 20, color: '#000', textAlign: 'left', fontFamily: font.SEMI_BOLD }}>₦
{this.currencyFormat(details.priceSold)}</Text>
                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 18, color: '#000', textAlign: 'left', fontFamily: font.MEDIUM }}>{details.name}</Text>
                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 20, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR_ITALICS }}>{details.location}.</Text>


                                <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>


                                    <View style={[{ flexDirection: 'row', flex: 1, margin: 10, alignItems: 'center', }, styles.boxWithShadow]}>
                                        <View style={{ margin: 10 }}>
                                            <Icon
                                                name="bed-outline"
                                                color={colors.primary_color}
                                                size={35}
                                                type='ionicon'
                                            />
                                        </View>
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR }}>4 Bedrooms.</Text>

                                    </View>
                                    <View style={[{ flexDirection: 'row', flex: 1, margin: 10, alignItems: 'center', }, styles.boxWithShadow]}>
                                        <View style={{ margin: 10 }}>
                                            <Icon
                                                name="ruler-square"
                                                color={colors.primary_color}
                                                size={35}
                                                type='material-community'
                                            />
                                        </View>
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR }}> 1200sqft.</Text>

                                    </View>
                                </View>


                                <View style={{ flexDirection: 'row', marginHorizontal: 10 }}>


                                    <View style={[{ flexDirection: 'row', flex: 1, margin: 10, alignItems: 'center', }, styles.boxWithShadow]}>
                                        <View style={{ margin: 10 }}>
                                            <Icon
                                                name="bathtub"
                                                color={colors.primary_color}
                                                size={35}
                                                type='font-awesome'
                                            />
                                        </View>
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR }}>3 Bath</Text>

                                    </View>
                                    <View style={[{ flexDirection: 'row', flex: 1, margin: 10, alignItems: 'center', }, styles.boxWithShadow]}>
                                        <View style={{ margin: 10 }}>
                                            <Icon
                                                name="car-outline"
                                                color={colors.primary_color}
                                                size={35}
                                                type='ionicon'
                                            />
                                        </View>
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR }}> 2 Parking</Text>

                                    </View>
                                </View>

                                <Text style={{ marginRight: 5, marginHorizontal: 20, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.REGULAR_ITALICS }}>{details.description}</Text>



                                <View style={{ flexDirection: 'row', margin: 10, marginBottom: 25 }}>
                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginRequest()} >
                                        <Text style={{ fontFamily: font.REGULAR, color: '#fff', fontSize: 14 }}>Contact</Text>
                                    </TouchableOpacity>

                                    <TouchableOpacity style={styles.buttonContainer} onPress={() => this.loginRequest()} >
                                        <Text style={{ fontFamily: font.REGULAR, color: '#fff', fontSize: 14 }}>Buy</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>

                    </View>


                </Content>
                <TouchableOpacity onPress={() => this.props.navigation.goBack()} style={{ margin: 10, position: 'absolute', top: 30, left: 20 }}>
                    <Icon
                        name="arrowleft"
                        color={colors.white}
                        size={35}
                        type='antdesign'
                    />
                </TouchableOpacity>
            </Container>
        )
    }

    renderCard(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link = data[i].id
            cat.push(
                <ImageBackground
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width - 100, }}
                    source={{ uri: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c8/35/4f.jpg' }}
                    imageStyle={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
                >
                    <View style={{ justifyContent: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').width, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', }} >



                        </View>
                    </View>
                    <TouchableOpacity style={{
                        height: 50,
                        width: 50,
                        justifyContent: 'center', alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: colors.primary_color,
                        margin: 10,
                        position: 'absolute',
                        bottom: -30,
                        right: 30
                    }}>
                        <Icon
                            name="keyboard-arrow-up"
                            color={colors.white}
                            size={25}
                            type='material'
                        />
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
        return cat;
    }



    renderC(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link = data[i].id
            cat.push(
                <ImageBackground
                    style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width - 100, }}
                    source={{ uri: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c8/35/4f.jpg' }}
                    imageStyle={{ borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }}
                >
                    <View style={{ justifyContent: 'center', width: Dimensions.get('window').width, height: Dimensions.get('window').width, borderBottomRightRadius: 50, borderBottomLeftRadius: 50 }} >
                        <View style={{ justifyContent: 'center', alignItems: 'center', }} >



                        </View>
                    </View>
                    <TouchableOpacity style={{
                        height: 50,
                        width: 50,
                        justifyContent: 'center', alignItems: 'center',
                        borderRadius: 50,
                        backgroundColor: colors.primary_color,
                        margin: 10,
                        position: 'absolute',
                        bottom: -30,
                        right: 30
                    }}>
                        <Icon
                            name="keyboard-arrow-up"
                            color={colors.white}
                            size={25}
                            type='material'
                        />
                    </TouchableOpacity>
                </ImageBackground>
            );
        }
        return cat;
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 10,
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
    boxWithShadow: {
        shadowColor: 'gray',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 1,
        elevation: 2,
        backgroundColor: '#fff'
    },
    buttonContainer: {
        width: Dimensions.get('window').width / 3,
        height: 40,
        marginRight: 30,
        marginLeft: 30,
        marginTop: 13,
        borderRadius: 20,
        backgroundColor: colors.primary_color,
        alignItems: 'center',
        justifyContent: 'center',
    },
});
