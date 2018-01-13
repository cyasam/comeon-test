import axios from 'axios';

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const fetchGames = (data, history) => {
    return async dispatch => {
        dispatch({
            type: FETCH_GAMES_REQUEST
        });

        const response = await axios('http://localhost:3000/games');

        if(response.status === 200){
            dispatch({
                type: FETCH_GAMES_SUCCESS,
                payload: response.data
            })
        } else {
            dispatch({
                type: FETCH_GAMES_ERROR,
                error: response.data.error
            })
        }
    }
};