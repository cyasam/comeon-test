import rootReducer from './reducers';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { fetchPlayer, AUTH_SUCCESS } from './actions';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(), applyMiddleware(thunk));

const user = localStorage.getItem('auth');

if(user) {
    store.dispatch({type: AUTH_SUCCESS, auth: true});
    fetchPlayer();
}

export default store;