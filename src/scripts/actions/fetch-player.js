import axios from 'axios';

export const FETCH_PLAYER_REQUEST = 'FETCH_PLAYER_REQUEST';
export const FETCH_PLAYER_SUCCESS = 'FETCH_PLAYER_SUCCESS';
export const FETCH_PLAYER_ERROR = 'FETCH_PLAYER_ERROR';

export const fetchPlayer = () => {
    return async dispatch => {
        dispatch({
            type: FETCH_PLAYER_REQUEST
        });

        const data = {
            username: localStorage.getItem('auth')
        }

        const response = await axios('http://localhost:3000/player', { method: 'POST', data });

        if(response.status === 200){
            dispatch({
                type: FETCH_PLAYER_SUCCESS,
                payload: response.data.player
            })
        } else {
            dispatch({
                type: FETCH_PLAYER_ERROR,
                error: response.data.error
            })
        }
    }
};