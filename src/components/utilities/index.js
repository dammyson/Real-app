import { AsyncStorage } from 'react-native';

export const baseUrl = () => {
    return 'https://realhub.herokuapp.com/api/';
};


export const getToken = async () => {
  return AsyncStorage.getItem('access_token')
};
export const getRefresheToken = async () => {
  return AsyncStorage.getItem('refresh_token')
};

export const getIsFirst = async () => {
  return AsyncStorage.getItem('isFirst')
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
    AsyncStorage.removeItem('curr');
    AsyncStorage.removeItem('cards');
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



