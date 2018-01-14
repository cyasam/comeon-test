import { FETCH_PLAYER_REQUEST, FETCH_PLAYER_SUCCESS, FETCH_PLAYER_ERROR } from '../actions';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_PLAYER_REQUEST:
            return { isFetching: true };
        case FETCH_PLAYER_SUCCESS:
            return { isFetching: false, ...action.payload };
        case FETCH_PLAYER_ERROR:
            return { isFetching: false, ...action.payload };
        default:
            return state;
    }
};