import { FETCH_GAMES_FAILURE,
    FETCH_GAMES_IN_PROGRESS,
    FETCH_GAMES_SUCCESSFUL,
} from '../../actions/games/Actions';

const INITIAL_STATE = {
    platform: null,
    gamesList: null,
    fetchGamesFailure: false,
    fetchGamesInProgress: false,
    fetchGamesSuccessful: false,
};

const gamesReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case FETCH_GAMES_IN_PROGRESS:
            return fetchingGamesInProgress(action, state);
        case FETCH_GAMES_FAILURE:
            return fetchingGamesFailure(action, state);
        case FETCH_GAMES_SUCCESSFUL:
            return fetchingGamesSuccessful(action, state);
        default:
            return state;
    }
};

const fetchingGamesInProgress = (action, state) => {
    return Object.assign({}, state, {
        platform: action.payload.platform,
        fetchGamesInProgress: true,
    });
};


const fetchingGamesSuccessful = (action, state) => {
    return Object.assign({}, state, {
        fetchGamesSuccessful: true,
        fetchGamesInProgress: false,
        gamesList: action.payload.games.games,
    });
};

const fetchingGamesFailure = (action, state) => {
    return Object.assign({}, state, {
        fetchGamesFailure: true,
        fetchGamesInProgress: false,
    });
};

export default gamesReducer;

