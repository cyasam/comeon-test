import axios from 'axios';
import { AUTH_REQUEST } from './index';

export const UNAUTH_SUCCESS = 'UNAUTH_SUCCESS';
export const UNAUTH_ERROR = 'UNAUTH_ERROR';

export const handleLogout = (data, history) => {
    return async dispatch => {
        dispatch({
            type: AUTH_REQUEST
        });

        const response = await axios('http://localhost:3000/logout', { method:'POST', data });

        if(response.status === 200 && response.data.status === 'success'){
            localStorage.removeItem('auth');
            dispatch({
                type: UNAUTH_SUCCESS,
                payload: response.data
            });
        } else {
            dispatch({
                type: UNAUTH_ERROR,
                payload: response.data
            });
        }
    }
};