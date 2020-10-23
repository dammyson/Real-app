import { Dimensions } from 'react-native'
import colors from './colors';
import constants from './constants';
import sizes from './sizes';
import screenStyles from './screenStyles';

export { constants, colors, sizes, screenStyles };
export const SCREEN_HEIGHT = Math.round(Dimensions.get('window').height);
export const SCREEN_WIDTH = Math.round(Dimensions.get('window').width);
export const BASE_URL = 'http://192.168.1.3:3000'
export const permission = {
    PUBLIC: 1,
    GROUP: 2,
    SETTING: 3
}
export const notificationTypes = {
    NEW_POST_IN_GROUP: 1,
    NEW_PHOTO_IN_GROUP: 2,
    ANYONE_REACT_YOUR_POST: 3,
    ANYONE_REACT_YOUR_COMMENT: 4,
    ANYONE_ADD_TO_STORY: 5,
    ANYONE_ANSWER_YOUR_COMMENT: 6,
    ANYONE_ACCEPT_YOUR_FRIEND_REQUEST: 7,
    ANYONE_COMMENT_POST_IN_GROUP_TOO: 8,
    ANYONE_COMMENT_POST_OF_ANYONE_TOO: 9,
    ANYONE_TAG_YOU_ON_POST_IN_GROUP: 10,
    ANYONE_TAG_YOU_ON_POST_OF_ANYONE: 11,
    ANYONE_LIVE_STREAM: 12,
    ANYONE_ANSWER_YOUR_COMMENT_IN_GROUP: 13,
}

export const loaderActions = {
    SHOW_LOADER: 'SHOW_LOADER',
    HIDE_LOADER: 'HIDE_LOADER',
}
export const notificationsActions = {
    FETCH_NOTIFICATIONS_REQUEST: 'FETCH_NOTIFICATIONS_REQUEST',
    FETCH_NOTIFICATIONS_FAILURE: 'FETCH_NOTIFICATIONS_FAILURE',
    FETCH_NOTIFICATIONS_SUCCESS: 'FETCH_NOTIFICATIONS_SUCCESS'
}
export const userActions = {
    LOGIN_REQUEST: 'LOGIN_REQUEST',
    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS',
    REGISTER_REQUEST: 'REGISTER_REQUEST',
    REGISTER_FAILURE: 'REGISTER_FAILURE',
    REGISTER_SUCCESS: 'REGISTER_SUCCESS',
}
export const FIXED_STATUSBAR_HEIGHT = 44