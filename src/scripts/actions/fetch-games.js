import axios from 'axios';

export const FETCH_GAMES_REQUEST = 'FETCH_GAMES_REQUEST';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_ERROR = 'FETCH_GAMES_ERROR';

export const fetchGames = (data, history) => {
    return async dispatch => {
        dispatch({
            type: FETCH_GAMES_REQUEST
        });

        try {
            const response = await axios('http://localhost:3000/games');

            if(response.status === 200){
                dispatch({
                    type: FETCH_GAMES_SUCCESS,
                    payload: {
                        data: response.data
                    }
                })
            } else {
                dispatch({
                    type: FETCH_GAMES_ERROR,
                    payload: response.data.error
                })
            }
        }
        catch(err) {
            dispatch({
                type: FETCH_GAMES_ERROR,
                payload: {
                    error: 'Something happened...'
                }
            })
        }
    }
};