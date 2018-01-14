import { combineReducers } from 'redux';
import loginForm from './authentication-reducer';
import fetchGames from './fetch-games-reducer';
import fetchCategories from './fetch-categories-reducer';
import fetchPlayer from './fetch-player-reducer';
import { reducer as form  } from 'redux-form';

export default combineReducers({
    form,
    authentication: loginForm,
    games: fetchGames,
    categories: fetchCategories,
    player: fetchPlayer
});