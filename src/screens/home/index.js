import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, StatusBar, TouchableOpacity, Image, ImageBackground, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import { FetchNotificationsRequest } from '../../actions/notificationsActions'
import { navigation } from '../../../rootNavigation'
import Swiper from 'react-native-swiper';
import colors from '../../components/theme/colors'
import { Icon } from 'react-native-elements';
import Carousel, { Pagination, ParallaxImage } from 'react-native-snap-carousel';

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
        const { slider1ActiveSlide } = this.state;
        const notifications = [...this.props.notifications]
        return (
            <ScrollView style={styles.container}>
                <StatusBar barStyle={'light-content'} />
                <View style={styles.sliderContainer}>
                    <Swiper
                        autoplay
                        horizontal={false}
                        height={200}
                        activeDotColor="#FF6347">
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/misis.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/land.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                        <View style={styles.slide}>
                            <Image
                                source={require('../../assets/house2.jpg')}
                                resizeMode="cover"
                                style={styles.sliderImage}
                            />
                        </View>
                    </Swiper>
                </View>

                <View style={styles.categoryContainer}>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() =>
                            navigation.navigate('CardListScreen', { title: 'Restaurant' })
                        }>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.secondary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>RENT</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.categoryBtn}
                        onPress={() =>
                            navigation.navigate('CardListScreen', { title: 'Fastfood Center' })
                        }>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.primary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>BUY</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.primary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>LEASE</Text>
                    </TouchableOpacity>
                </View>
                <View style={[styles.categoryContainer, { marginTop: 10 }]}>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.primary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>SHORT LET</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.primary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>LAND</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.categoryBtn} onPress={() => { }}>
                        <View style={styles.categoryIcon}>
                            <Icon
                                name="email"
                                size={20}
                                type='entypo'
                                color={colors.primary_color}

                            />
                        </View>
                        <Text style={styles.categoryBtnTxt}>Show More</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ alignItems: 'center', }}>
                    <Text
                        style={{
                            textAlign: 'left',
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: '#333',
                        }}>
                        Recently Viewed
        </Text>
                    <View style={styles.header}>

                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={this.state.dataone}

                            renderItem={this._renderItem}
                            sliderWidth={Dimensions.get('window').width}
                            itemWidth={Dimensions.get('window').width / 1.3}
                            onSnapToItem={(index) => this.setState({ slider1ActiveSlide: index })}
                            hasParallaxImages={true}


                        />
                        <Pagination
                            dotsLength={this.state.dataone.length}
                            activeDotIndex={slider1ActiveSlide}
                            containerStyle={styles.paginationContainer}
                            dotStyle={styles.paginationDot}
                            inactiveDotOpacity={0.4}
                            inactiveDotScale={0.6}
                        />
                    </View>
                </View>


            </ScrollView>
        )
    }


    _renderItem = ({ item, index }, parallaxProps) => {

        return (
            <TouchableOpacity style={{ borderRadius: 12, marginBottom: 20 }} onPress={() => this.getDetails(item)} >
                <ImageBackground
                    opacity={0.5}
                    style={{ borderRadius: 12, }}
                    source={require('../../assets/house2.jpg')}
                    imageStyle={{ borderRadius: 20, backgroundColor: 'blue' }}

                >
                    <View style={styles.details} >
                        <Text style={styles.date}>pppppppppp</Text>
                        <Text style={styles.tittle}>kkkkkkkkkkkkkkkkkkkkkkk</Text>
                        <View style={styles.piceContainer}>
                            <View style={{ flex: 1, flexDirection: 'row', marginTop: 3, marginLeft: 15 }}>
                                <View style={{ flex: 1, }}>

                                </View>

                                <View style={{ width: 20 }}>

                                </View>
                            </View>
                        </View>

                    </View>


                </ImageBackground>
            </TouchableOpacity>
        );
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
    },
    sliderContainer: {
        height: 200,
        width: '100%',
        justifyContent: 'center',
        alignSelf: 'center',
        borderRadius: 8,
    },

    wrapper: {},

    slide: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'transparent',
    },
    sliderImage: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
    },
    categoryContainer: {
        flexDirection: 'row',
        width: '90%',
        alignSelf: 'center',
        marginTop: 25,
        marginBottom: 10,
    },
    categoryBtn: {
        flex: 1,
        width: '30%',
        marginHorizontal: 0,
        alignSelf: 'center',
    },
    categoryIcon: {
        borderWidth: 0,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        width: 70,
        height: 70,
        backgroundColor: '#415c5a30' /* '#FF6347' */,
        borderRadius: 50,
    },
    categoryBtnTxt: {
        alignSelf: 'center',
        marginTop: 5,
        color: '#415c5a',
    },
    cardsWrapper: {
        marginTop: 20,
        width: '90%',
        alignSelf: 'center',
    },
    card: {
        height: 100,
        marginVertical: 10,
        flexDirection: 'row',
        shadowColor: '#999',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
    },
    cardImgWrapper: {
        flex: 1,
    },
    cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
    },
    cardInfo: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
    },
    cardTitle: {
        fontWeight: 'bold',
    },
    cardDetails: {
        fontSize: 12,
        color: '#444',
    },
    details: {
        marginTop: 100,
        marginBottom: 25,
    },
    date: {
        marginRight: 13,
        marginLeft: 13,
        fontSize: 12,
        color: '#ffffff',
        textAlign: 'left',
        fontFamily: 'NunitoSans-Bold'
    },
    tittle: {
        marginRight: 13,
        marginLeft: 13,
        fontSize: 16,
        color: '#ffffff',
        textAlign: 'left',
        fontWeight: '600',
        fontFamily: 'NunitoSans-Bold'
    },
    price: {

        marginRight: 13,
        marginLeft: 13,
        fontSize: 10,
        color: '#ffffff',
        textAlign: 'left',
        fontFamily: 'NunitoSans-Bold'
    },
});
