import { FETCH_GAMES_REQUEST, FETCH_GAMES_SUCCESS, FETCH_GAMES_ERROR } from '../actions';

const initialState = {
    isFetching: true
};

export default (state = initialState, action) => {
    switch(action.type){
        case FETCH_GAMES_REQUEST:
            return { isFetching: true };
        case FETCH_GAMES_SUCCESS:
            return { isFetching: false, ...action.payload };
        case FETCH_GAMES_ERROR:
            return { isFetching: false, ...action.payload };
        default:
            return state;
    }
};