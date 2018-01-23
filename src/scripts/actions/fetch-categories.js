import axios from 'axios';

export const FETCH_CATEGORIES_REQUEST = 'FETCH_CATEGORIES_REQUEST';
export const FETCH_CATEGORIES_SUCCESS = 'FETCH_CATEGORIES_SUCCESS';
export const FETCH_CATEGORIES_ERROR = 'FETCH_CATEGORIES_ERROR';

export const fetchCategories = (data) => {
    return async dispatch => {
        dispatch({
            type: FETCH_CATEGORIES_REQUEST
        });

        try {
            const response = await axios('http://localhost:3000/categories');
            
            if(response.status === 200){
                dispatch({
                    type: FETCH_CATEGORIES_SUCCESS,
                    payload: {
                        data: response.data
                    }
                })
            } else {
                dispatch({
                    type: FETCH_CATEGORIES_ERROR,
                    payload: response.data.error
                })
            }
        }
        catch(err) {
            dispatch({
                type: FETCH_CATEGORIES_ERROR,
                payload: {
                    error: 'Something happened...'
                }
            })
        }  
    }
};