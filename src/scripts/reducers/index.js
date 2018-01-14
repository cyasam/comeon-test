import { combineReducers } from 'redux';
import loginForm from './authentication-reducer';
import fetchGames from './fetch-games-reducer';
import fetchCategories from './fetch-categories-reducer';
import fetchPlayer from './fetch-player-reducer';
import fetchSearch from './fetch-search-reducer';
import { reducer as form  } from 'redux-form';
import { UNAUTH_SUCCESS } from '../actions';

const appReducer = combineReducers({
    form,
    authentication: loginForm,
    games: fetchGames,
    categories: fetchCategories,
    player: fetchPlayer,
    search: fetchSearch
});

const rootReducer = (state, action) => {
    if(action.type === UNAUTH_SUCCESS){
        state = undefined;
    }

    return appReducer(state, action)
}

export default rootReducer;