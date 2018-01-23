import axios from 'axios';

export const UNAUTH_REQUEST = 'UNAUTH_REQUEST';
export const UNAUTH_SUCCESS = 'UNAUTH_SUCCESS';
export const UNAUTH_ERROR = 'UNAUTH_ERROR';

export const handleLogout = (data, history) => {
    return async dispatch => {
        dispatch({
            type: UNAUTH_REQUEST
        });

        try {
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
        catch(err) {
            dispatch({
                type: UNAUTH_ERROR,
                payload: {
                    error: 'Logout Server error. Please try again later.'
                }
            })
        }
    }
};