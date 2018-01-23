import axios from 'axios';

export const AUTH_REQUEST = 'AUTH_REQUEST';
export const AUTH_SUCCESS = 'AUTH_SUCCESS';
export const AUTH_ERROR = 'AUTH_ERROR';

export const submitLogin = (data, history) => {
    return async dispatch => {
        dispatch({
            type: AUTH_REQUEST
        });

        try {
            const response = await axios('http://localhost:3000/login', { method:'POST', data });

            if(response.status === 200 && response.data.status === 'success'){
                localStorage.setItem('auth', data.username);
                dispatch({
                    type: AUTH_SUCCESS,
                    payload: {
                        status: response.data.status
                    }
                });
                history.push('/');
            } else {
                localStorage.removeItem('auth');
                dispatch({
                    type: AUTH_ERROR,
                    payload: response.data
                });
            }
        }
        catch(err) {
            dispatch({
                type: AUTH_ERROR,
                payload: {
                    error: 'Server error. Please try again later.'
                }
            })
        }
    }
};