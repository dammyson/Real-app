import React, { Component } from 'react'
import { Text, StyleSheet, View, ScrollView, FlatList, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { FetchNotificationsRequest } from '../../actions/notificationsActions'
import { navigation } from '../../../rootNavigation'


class index extends Component {
    constructor(props) {
        super(props)
    }
    componentDidMount() {
        const { fetchNotifications } = this.props
        fetchNotifications()
    }
    onPressSearchHandler() {
        navigation.navigate('Search')
    }
    render() {
        const notifications = [...this.props.notifications]
        return (
            <View style={styles.container}>
                <View style={styles.titleWrapper}>
                    <Text style={styles.title}>Notifications</Text>
                </View>
                <Text style={styles.notiTitle}>New</Text>
                <Text style={styles.notiTitle}>Before that</Text>
                <View style={{ paddingTop: 1, paddingBottom: 10, flex: 1, }}>
                <FlatList
                  style={{ paddingBottom: 5 }}
                  data={notifications}
                  renderItem={this.renderItem}
                  keyExtractor={item => item.id}
                  ItemSeparatorComponent={this.renderSeparator}
                  ListHeaderComponent={this.renderHeader}
                />
              </View>

            </View>
        )
    }


renderItem = ({ item, }) => {
    return (
      <TouchableOpacity style={{ marginLeft: 20, marginRight: 20, marginBottom: 15, marginTop: 15, borderBottomColor: '#d1d1d1', borderBottomWidth: 0.5 }}
       underlayColor="red">
        <View style={{ flex: 1, flexDirection: 'row', justifyContent:'center' }}>
          <View style={{ flex: 1, }}>
            <Text style={styles.name}>{item.name.toUpperCase()}</Text>

          </View>
        </View>

      </TouchableOpacity>

    )

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
        backgroundColor: '#fff',
        flex:1
    },
    titleWrapper: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 40,
        alignItems: 'center',
        marginHorizontal: 20
    },
    btnSearch: {
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#ddd',
        borderRadius: 40
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    notiTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        margin: 10,
        marginHorizontal: 20
    }
})
