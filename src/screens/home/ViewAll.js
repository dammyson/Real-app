import React, { Component } from 'react'
import { Text, StyleSheet, View, TextInput, StatusBar, TouchableOpacity, ScrollView, ImageBackground, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { FetchNotificationsRequest } from '../../actions/notificationsActions'
import { navigation } from '../../../rootNavigation'
import { Container, Content, Button, Left, } from 'native-base';
import Swiper from 'react-native-swiper';
import colors from '../../components/theme/colors'
import { Icon } from 'react-native-elements';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';
import { font } from '../../constants'
import { color } from 'react-native-reanimated'

class index extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            slider1ActiveSlide: 0,
            dataone: [4, 5, 6
            ],
            datatwo: [
            ],
        };
    }
    componentDidMount() {
        const { fetchNotifications } = this.props
        fetchNotifications()
    }
    onPressSearchHandler() {
        navigation.navigate('Search')
    }
    render() {
        return (
            <Container style={{ backgroundColor: "#fff" }}>
                <StatusBar backgroundColor={"#fff"} barStyle="dark-content" />
                <View>
                    <View style={{ marginHorizontal: 20, marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', }}>
                        <View style={styles.operation_icon}>

                            <Icon
                                name="md-arrow-back-sharp"
                                color={'#000'}
                                size={25}
                                type='ionicon'
                            />
                        </View>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', }}>
                            <Text style={{ fontFamily: font.SEMI_BOLD, fontSize: 16, marginTop: 2, color: '#000' }}>Explore Properties</Text>
                        </View>

                        <View style={{ width: 35 }} />



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

                    <View style={{ marginHorizontal: 10, marginTop: 1, justifyContent: 'center', marginBottom: 6, flexDirection: 'row' }}>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.primary_color, }}>
                            <Text style={{ fontFamily: font.REGULAR, fontSize: 12, marginVertical: 5, color: '#fff', marginHorizontal: 10, }}>Near Me</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.primary_color, }}>
                            <Text style={{ fontFamily: font.REGULAR, fontSize: 12, marginVertical: 5, color: '#fff', marginHorizontal: 10, }}> Offices</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.primary_color, }}>
                            <Text style={{ fontFamily: font.REGULAR, fontSize: 12, marginVertical: 5, color: '#fff', marginHorizontal: 10, }}>Lands</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ marginHorizontal: 5, alignItems: 'center', justifyContent: 'center', borderRadius: 10, backgroundColor: colors.primary_color, }}>
                            <Text style={{ fontFamily: font.REGULAR, fontSize: 12, marginVertical: 5, color: '#fff', marginHorizontal: 10, }}>Appartments</Text>
                        </TouchableOpacity>



                    </View>

                </View>
                <Content>
                    <View style={styles.backgroundImage}>
                        <View style={styles.mainbody}>
                            {this.renderCard([8, 9, 5, 6])}
                        </View>

                    </View>
                </Content>
            </Container>
        )
    }


    renderCard(data) {
        let cat = [];
        for (var i = 0; i < data.length; i++) {
            const link = "category/" + data[i].id + '/' + 10
            cat.push(
                <TouchableOpacity style={{ width: Dimensions.get('window').width, height: Dimensions.get('window').width / 1.5, marginVertical: 10 }} >
                    <ImageBackground
                        style={{ borderRadius: 12, width: Dimensions.get('window').width, height: Dimensions.get('window').width / 1.5, }}
                        source={{ uri: 'https://media-cdn.tripadvisor.com/media/vr-splice-j/04/c8/35/4f.jpg' }}
                        imageStyle={{ backgroundColor: 'blue' }}

                    >
                        <View style={{ justifyContent: 'flex-end', width: Dimensions.get('window').width, height: Dimensions.get('window').width / 1.5, }} >
                            <View style={{ paddingTop: 5, backgroundColor: '#fff', }} >
                                <Text numberOfLines={1} style={{ marginRight: 13, marginTop: 7, marginLeft: 13, fontSize: 13, color: '#000', textAlign: 'left', fontFamily: font.LIGHT }}>Beautiful & Elegant Modern Condo</Text>
                                <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 13, fontSize: 12, color: '#000', textAlign: 'left', fontFamily: font.BOLD }}>4 Bedrooms, 3 Bath, 1200sqft.</Text>

                                <View style={styles.piceContainer}>
                                    <View style={{ flex: 1, flexDirection: 'row', marginTop: 3, marginLeft: 10, marginBottom: 15 }}>

                                        <Icon
                                            active
                                            name="location-pin"
                                            type='entypo'
                                            color={colors.primary_color}
                                            size={15}
                                        />
                                        <Text numberOfLines={1} style={{ marginRight: 5, marginLeft: 5, fontSize: 10, color: '#000', textAlign: 'left', fontFamily: 'NunitoSans-light' }}>Abuja, NG.</Text>

                                    </View>

                                </View>

                            </View>
                        </View>

                    </ImageBackground>
                    <TouchableOpacity style={{ position: 'absolute', justifyContent: 'center', alignItems: 'center', right: 10, bottom: 70, height: 35, width: 35, borderRadius: 20, backgroundColor: colors.primary_color }} >
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

const mapStateToProps = state => {
    return {
        notifications: state.notifications
    }
}
const mapDispatchToProps = (dispatch, props) => {
    return {
        fetchNotifications: () => dispatch(FetchNotificationsRequest())
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(index);

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
    piceContainer: {
        flexDirection: 'row'
    },
});
