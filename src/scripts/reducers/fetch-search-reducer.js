import { FETCH_SEARCH } from '../actions';

export default (state = {}, action) => {
    switch(action.type){
        case FETCH_SEARCH:
            return { isFetching: false, ...action.payload };
        default:
            return state;
    }
};