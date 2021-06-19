import { AsyncStorage } from 'react-native';
import { showMessage, hideMessage } from "react-native-flash-message";

export const baseUrl = () => {
    return 'https://realhub.herokuapp.com/api/';
};


export const setToken = (token) => {
  AsyncStorage.setItem('access_token', token);
};
export const getToken = async () => {
  return AsyncStorage.getItem('access_token')
};
export const setRefresheToken = (token) => {
  AsyncStorage.setItem('refresh_token', token);
};
export const getRefresheToken = async () => {
  return AsyncStorage.getItem('refresh_token')
};


export const setLogedIn =  (token) => {
  return AsyncStorage.setItem('rem', token)
};
export const getLogedIn = async () => {
  return AsyncStorage.getItem('rem')
};

export const setUserId = (id) => {
  console.warn(id);
  AsyncStorage.setItem('user_id', id);
};
export const getUserId = async () => {
  return AsyncStorage.getItem('user_id')
};


export const getPhone = async () => {
  return AsyncStorage.getItem('phone')
};

export const getCurrency = async () => {
  return AsyncStorage.getItem('curr')
};

export const getCountry = async () => {
  return AsyncStorage.getItem('ctry')
};

export const getCards = async () => {
  return AsyncStorage.getItem('cards')
};

export const getUser = async () => {
  return AsyncStorage.getItem('user')
};

export const getLogout = () => {
  try {
    AsyncStorage.removeItem('access_token');
    AsyncStorage.removeItem('refresh_token');
    AsyncStorage.removeItem('token');
    AsyncStorage.removeItem('rem');
    return true;
  }
  catch (exception) {
    return false;
  }
};


export const processResponse = (response) => {
  const statusCode = response.status;
  const data = response.json();
  return Promise.all([statusCode, data]).then(res => ({
    statusCode: res[0],
    data: res[1]
  }));
}

//success, warning, info and danger
export const showTopNotification = (type, message, duration)=> {
  showMessage({
    message: message,
    type: type,
    duration: duration*1000,
    icon: type 
  });
}



