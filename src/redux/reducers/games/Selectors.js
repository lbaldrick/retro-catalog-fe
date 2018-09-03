const getGamesState = (state) => {
  return state.games;
};

export const getPlatform = (state) => {
  return getGamesState(state).platform;
};

export const getFetchingGamesInProgress = (state) => {
    return getGamesState(state).fetchGamesInProgress;
};

export const getFetchingGamesSuccessful = (state) => {
    return getGamesState(state).fetchGamesSuccessful;
};

export const getFetchingGamesFailure = (state) => {
    return getGamesState(state).fetchGamesFailure;
};

export const getGamesList = (state) => {
    return getGamesState(state).gamesList || [];
};

export const getTotalNumOfGames = (state) => {
    return getGamesList(state).length;
};
