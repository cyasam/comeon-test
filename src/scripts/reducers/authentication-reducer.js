import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_ERROR, UNAUTH_SUCCESS, UNAUTH_ERROR } from '../actions';

export default (state = {}, action) => {
    switch(action.type){
        case AUTH_REQUEST:
            return { isFetching: true };
        case AUTH_SUCCESS:
            return { isFetching: false, auth: true, ...action.payload };
        case UNAUTH_SUCCESS:
            return { isFetching: false, auth: false, ...action.payload };
        case AUTH_ERROR:
            return { isFetching: false, auth: false, ...action.payload };
        case UNAUTH_ERROR:
            return { isFetching: false, auth: true, ...action.payload };
        default:
            return state;
    }
};