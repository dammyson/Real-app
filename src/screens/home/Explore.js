import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, StatusBar, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { Container, Content, Button, Left, } from 'native-base';
import colors from '../../components/theme/colors'
import { Icon } from 'react-native-elements';
import { font } from '../../constants'
import { baseUrl, getToken, processResponse, showTopNotification } from '../../utilities';
import ActivityIndicator from '../../components/views/ActivityIndicator';

export default class ViewAll extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            slider1ActiveSlide: 0,
            dataone: [],
            datatwo: [
            ],
        };
    }
    componentDidMount() {
        this.getProperties()
    }
    onPressSearchHandler() {



    }


    async getProperties() {
        this.setState({ loading: true })
        console.warn(baseUrl() + 'properties')

        fetch(baseUrl() + 'properties', {
            method: 'GET', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }
        })
            .then(processResponse)
            .then(res => {
                this.setState({ loading: false })
                const { statusCode, data } = res

                console.warn(data)
                if (statusCode == 200) {

                    this.setState({
                        dataone: data
                    })
                    this.arrayholder = data;

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
    render() {

        if (this.state.loading) {
            return (
                <ActivityIndicator />
            )
        }

        return (
            <Container style={{ backgroundColor: "transparent" }}>
                <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
                <Content>
                    {this.state.dataone.length==0 ? 
                    <View style={{}}>
                        
                    </View>
                    : 
                    <View style={styles.backgroundImage}>
                        <View style={styles.mainbody}>
                            <View style={{ marginHorizontal: 20, marginTop: 25, justifyContent: 'center', }}>
                                <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 16, marginTop: 2, color: '#080256' }}>Explore Properties</Text>

                            </View>
                            <View style={[styles.secondSearchTextInputContainer]}>

                                <View style={styles.input}>
                                    <TextInput
                                        placeholder="Search by Location, Land Use, etc."
                                        placeholderTextColor={colors.placeholderTextColor}
                                        returnKeyType="next"
                                        keyboardType='email-address'
                                        autoCapitalize="none"
                                        autoCorrect={false}
                                        defaultValue={this.state.email}
                                        style={{ flex: 1, fontSize: 13, color: colors.primary_color, fontFamily: font.REGULAR, }}
                                        onChangeText={this.searchFilterFunction}
                                    />
                                </View>

                                <View style={styles.operation_icon}>

                                    <Icon
                                        name="search"
                                        color={colors.placeholder_color}
                                        size={25}
                                        type='ionicon'
                                    />
                                </View>
                            </View>

                            <View style={{ marginHorizontal: 10, marginTop: 15, justifyContent: 'center', marginBottom: 6, flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 10, justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 14, marginTop: 2, color: '#000' }}>Explore Properties</Text>
                                </View>

                                <TouchableOpacity onPress={() => this.props.navigation.navigate('viewall')} style={{ marginHorizontal: 10, justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: font.LIGHT, fontSize: 12, marginTop: 2, color: colors.primary_color }}>View All</Text>
                                </TouchableOpacity>

                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView}>
                                {this.renderCard(this.state.dataone)}
                            </ScrollView>


                            <View style={{ marginHorizontal: 10, marginTop: 15, justifyContent: 'center', marginBottom: 6, flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 10, justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 14, marginTop: 2, color: '#000' }}>For Rent (Lease)</Text>
                                </View>

                                <View style={{ marginHorizontal: 10, justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: font.LIGHT, fontSize: 12, marginTop: 2, color: colors.primary_color }}>View All</Text>
                                </View>

                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView}>
                            {this.renderCard(this.state.dataone)}
                            </ScrollView>
                            <View style={{ marginHorizontal: 10, marginTop: 15, justifyContent: 'center', marginBottom: 6, flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 10, justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 14, marginTop: 2, color: '#000' }}>Short-let</Text>
                                </View>

                                <View style={{ marginHorizontal: 10, justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: font.LIGHT, fontSize: 12, marginTop: 2, color: colors.primary_color }}>View All</Text>
                                </View>

                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView}>
                            {this.renderCard(this.state.dataone)}
                            </ScrollView>
                            <View style={{ marginHorizontal: 10, marginTop: 15, justifyContent: 'center', marginBottom: 6, flexDirection: 'row' }}>
                                <View style={{ marginHorizontal: 10, justifyContent: 'center', flex: 1 }}>
                                    <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 14, marginTop: 2, color: '#000' }}>Joint Venture</Text>
                                </View>

                                <View style={{ marginHorizontal: 10, justifyContent: 'center', }}>
                                    <Text style={{ fontFamily: font.LIGHT, fontSize: 12, marginTop: 2, color: colors.primary_color }}>View All</Text>
                                </View>

                            </View>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal style={styles.scrollView}>
                            {this.renderCard(this.state.dataone)}
                            </ScrollView>


                        </View>

                    </View> }
                </Content>
            </Container>
        )
    }


    renderCard(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link =  data[i].id 
            cat.push(
                <TouchableOpacity onPress={() => this.props.navigation.navigate('details', {id:link })} style={{ width: Dimensions.get('window').width / 1.7, height: Dimensions.get('window').width / 1.7, borderRadius: 20, marginHorizontal: 10, }} >
                    <ImageBackground
                        style={{ borderRadius: 12, width: Dimensions.get('window').width / 1.7, height: Dimensions.get('window').width / 1.8, }}
                        source={{ uri:data[i].images[0] }}
                        imageStyle={{ borderRadius: 20, backgroundColor: 'blue' }}

                    >
                        <View style={{ justifyContent: 'flex-end', width: Dimensions.get('window').width / 1.7, height: Dimensions.get('window').width / 1.7, }} >
                            <View style={{ paddingTop: 5, backgroundColor: '#fff', borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }} >
                                <Text numberOfLines={2} style={{ marginRight: 13, marginTop: 7, marginLeft: 13, fontSize: 13, color: '#000', textAlign: 'left', fontFamily: font.LIGHT }}>{ data[i].name}</Text>
                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.BOLD }}>{ data[i].description}</Text>

                                <View style={styles.piceContainer}>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 3, marginLeft: 10, marginBottom: 15 }}>

                                        <Icon
                                            active
                                            name="location-pin"
                                            type='entypo'
                                            color={colors.primary_color}
                                            size={15}
                                        />
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 10, color: '#000', textAlign: 'left', fontFamily: 'NunitoSans-light' }}>{ data[i].location}</Text>

                                    </View>

                                </View>

                            </View>
                        </View>

                    </ImageBackground>
                    <TouchableOpacity style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', right: 10, bottom: 90, height: 35, width: 35, borderRadius: 20, backgroundColor: colors.primary_color }} >
                        <Icon
                            name="ios-arrow-redo-sharp"
                            type='ionicon'
                            color={colors.white}
                            size={15}
                        />
                    </TouchableOpacity>


                </TouchableOpacity>
            );
        }
        return cat;
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
        paddingHorizontal: 5,
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
    piceContainer: {
        flexDirection: 'row'
    },
});
