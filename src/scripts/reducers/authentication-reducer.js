import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_ERROR } from '../actions';

export default (state = {}, action) => {
    switch(action.type){
        case LOGIN_REQUEST:
            return { isFetching: true, auth: false };
        case LOGIN_SUCCESS:
            return { isFetching: false, auth: true, ...action.payload };
        case LOGIN_ERROR:
            return { isFetching: false, auth: false, ...action.payload };
        default:
            return state;
    }
};