import { FETCH_CATEGORIES_REQUEST, FETCH_CATEGORIES_SUCCESS, FETCH_CATEGORIES_ERROR } from '../actions';

const initialState = {
    isFetching: true
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_CATEGORIES_REQUEST:
            return { isFetching: true };
        case FETCH_CATEGORIES_SUCCESS:
            return { isFetching: false, data: action.payload };
        case FETCH_CATEGORIES_ERROR:
            return { isFetching: false, error: action.error };
        default:
            return state;
    }
};