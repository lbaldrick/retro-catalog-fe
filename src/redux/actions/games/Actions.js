import gamesService from '../../../services/Games';

export const FETCH_GAMES_IN_PROGRESS = 'FETCH_GAMES_IN_PROGRESS';
export const FETCH_GAMES_SUCCESSFUL = 'FETCH_GAMES_SUCCESSFUL';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';


export const fetchGames = (platform) => {
    return (dispatch) => {
        dispatch(fetchGamesInProgress(platform));
        gamesService.getGames(platform)
            .then((games) => {
                dispatch(fetchGamesSuccessful(games));
            })
            .catch(() => {
                dispatch(fetchGamesFailure());
            })
    }
};


const fetchGamesInProgress = (platform) => {
    return {
        type: FETCH_GAMES_IN_PROGRESS,
        payload: {platform}
    }
};

const fetchGamesSuccessful = (games) => {
    return {
        type: FETCH_GAMES_SUCCESSFUL,
        payload: {games}
    }
};

const fetchGamesFailure = () => {
    return {
        type: FETCH_GAMES_FAILURE,
        payload: {}
    }
};

