import axios from 'axios';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const submitLogin = (data, history) => {
    return async dispatch => {
        dispatch({
            type: LOGIN_REQUEST
        });

        const response = await axios('http://localhost:3000/login', { method:'POST', data });

        if(response.status === 200 && response.data.status === 'success'){
            localStorage.setItem('auth', true);
            dispatch({
                type: LOGIN_SUCCESS,
                payload: response.data
            })
            history.push('/');
        } else {
            localStorage.removeItem('auth');
            dispatch({
                type: LOGIN_ERROR,
                payload: response.data
            })
        }
    }
};