import {createSelector,} from 'reselect';
import {getGamesList} from "../games/Selectors";
import _orderBy from "lodash/orderBy";

const getGamesUiState = (state) => {
    return state.gamesUi;
};

export const getSortBy = (state) => {
    return getGamesUiState(state).sortBy;
};

export const getIsAscending = (state) => {
    return getGamesUiState(state).isAscending;
};

export const getCurrentPageNumber = (state) => {
    return getGamesUiState(state).currentPageNumber;
};

export const getTotalRowsPerPage = (state) => {
    return getGamesUiState(state).totalRowsPerPage;
};

export const getPlatformList = (state) => {
    return getGamesUiState(state).platforms;
};

export const getSelectedPlatform = (state) => {
    return getGamesUiState(state).selectedPlatform;
};

export const getSortedGameList = createSelector(
  [getGamesList, getSortBy, getIsAscending],
    (games, sortBy, isAscending) => _orderBy(games, sortBy, isAscending ? 'asc' : 'dsc')
);

export const getGamesForCurrentPage = createSelector(
    [getSortedGameList, getCurrentPageNumber, getTotalRowsPerPage],
    (games, pageNumber, totalRows) => {
        const currentIndex = pageNumber * totalRows;
        const endIndex = currentIndex + totalRows > games.length ? games.length : currentIndex + totalRows;
        return games.slice(currentIndex ,endIndex)
    }
);

