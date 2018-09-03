export const SORT_GAMES_LIST = 'SORT_GAMES_LIST';
export const SELECT_NEXT_PAGE_IN_GAME_LIST = 'SELECT_NEXT_PAGE_IN_GAME_LIST';
export const SELECT_PREV_PAGE_IN_GAME_LIST = 'SELECT_PREV_PAGE_IN_GAME_LIST';
export const SELECT_GAME_PLATFORM = 'SELECT_GAME_PLATFORM';


export const sortGamesList = (sortBy, isAscending) => {
    return {
        type: SORT_GAMES_LIST,
        payload: {
            sortBy,
            isAscending,
        }
    }
};

export const selectNextPageInGameList = () => {
    return {
        type: SELECT_NEXT_PAGE_IN_GAME_LIST,
        payload: {}
    }
};

export const selectPrevPageInGameList = () => {
    return {
        type: SELECT_PREV_PAGE_IN_GAME_LIST,
        payload: {}
    }
};

export const selectPlatform = (platform) => {
    return {
        type: SELECT_GAME_PLATFORM,
        payload: {platform}
    }
};
