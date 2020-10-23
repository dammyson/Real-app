import { userActions } from '../constants'
import { SHOW_LOADER, HIDE_LOADER } from './loaderAction'
import { baseUrl, setToken, setRefresheToken, setIsFirst, setUserId, processResponse } from '../utilities';
import axios from 'axios'

export const LoginRequest = (email, password) => {
    return (dispatch) => {
        dispatch(SHOW_LOADER('Login in..'))
        fetch(baseUrl() + 'auth', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }, body: JSON.stringify({
                email: email,
                password: password,
                rememberMe: true,
            }),
        })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                if (statusCode === 200) {
                    setToken(data.access_token)
                    setRefresheToken(data.refresh_token)
                    setIsFirst('yes')
                    setUserId(data.id)
                    dispatch(LoginSuccess(data))
                    dispatch(HIDE_LOADER())
                } else if (statusCode === 422) {
                    dispatch(HIDE_LOADER())
                    dispatch(LoginFailure(data.message))
                } else {
                    dispatch(HIDE_LOADER())
                    dispatch(LoginFailure(data.message))
                }
            })
            .catch((error) => {
                dispatch(HIDE_LOADER())
                dispatch(LoginFailure(error))
            });

    }
}
const FetchDefaultState = () => {
    return {
        type: userActions.LOGIN_REQUEST,
    }
}
export const LoginFailure = (error) => {
    return {
        type: userActions.LOGIN_FAILURE,
        error
    }
}
export const LoginSuccess = (user) => {
    return {
        type: userActions.LOGIN_SUCCESS,
        payload: user
    }
}

export const RegisterRequest = (details) => {
    return (dispatch) => {
        dispatch(SHOW_LOADER('Creating...'))

        fetch(baseUrl() + 'users', {
            method: 'POST', headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
            }, body: details,
        })
            .then(processResponse)
            .then(res => {
                const { statusCode, data } = res;
                if (statusCode === 200) {
                    setUserId(data.id)
                    dispatch(RegisterSuccess(data))
                    dispatch(HIDE_LOADER())
                } else if (statusCode === 422) {
                    dispatch(HIDE_LOADER())
                    dispatch(RegisterFailure(data.message))
                } else {
                    dispatch(HIDE_LOADER())
                    dispatch(RegisterFailure(data.message))
                }
            })
            .catch((error) => {
                dispatch(HIDE_LOADER())
                dispatch(RegisterFailure(error))
            });


    }
}

const FetchRegeDefaultState = () => {
    return {
        type: userActions.REGISTER_REQUEST,
    }
}
export const RegisterFailure = (error) => {
    return {
        type: userActions.REGISTER_FAILURE,
        error
    }
}
export const RegisterSuccess = (user) => {
    return {
        type: userActions.REGISTER_SUCCESS,
        payload: user
    }
}

