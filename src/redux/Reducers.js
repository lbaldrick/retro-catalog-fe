import { combineReducers } from 'redux';
import GamesReducer from './reducers/games/Reducer';
import GamesUiReducer from './reducers/games-ui/Reducer';

export default combineReducers({
    games: GamesReducer,
    gamesUi: GamesUiReducer,
});