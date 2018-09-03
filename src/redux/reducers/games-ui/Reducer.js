import { SELECT_NEXT_PAGE_IN_GAME_LIST,
    SELECT_PREV_PAGE_IN_GAME_LIST,
    SORT_GAMES_LIST, SELECT_GAME_PLATFORM
} from '../../actions/games-ui/Actions';

import AtariIcon from '../../../../img/atari-2600.png';
import SnesIcon from '../../../../img/super-nintendo-entertainment-system.png';

const platforms = [{
    id: 'atari-2600',
    text: 'Atari 2600',
    image: AtariIcon,
}, {
    id: 'snes',
    text: 'Super Nintendo',
    image: SnesIcon,
}];

const INITIAL_STATE = {
    sortBy: null,
    isAscending: false,
    currentPageNumber: 0,
    totalRowsPerPage: 5,
    platforms,
    selectedPlatform: null,
};

const gamesUiReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SORT_GAMES_LIST:
            return changeSort(action, state);
        case SELECT_PREV_PAGE_IN_GAME_LIST:
            return selectPrevPage(action, state);
        case SELECT_NEXT_PAGE_IN_GAME_LIST:
            return selectNextPage(action, state);
        case SELECT_GAME_PLATFORM:
            return selectPlatform(action, state);
        default:
            return state;
    }
};

const changeSort = (action, state) => {
    return Object.assign({}, state, {
        sortBy: action.payload.sortBy,
        isAscending: action.payload.isAscending,
    });
};

const selectNextPage = (action, state) => {
    return Object.assign({}, state, {
        currentPageNumber: ++state.currentPageNumber,
    });
};

const selectPrevPage = (action, state) => {
    return Object.assign({}, state, {
        currentPageNumber: state.currentPageNumber ? state.currentPageNumber - 1 : state.currentPageNumber,
    });
};

const selectPlatform = (action, state) => {
    return Object.assign({}, state, {
        selectedPlatform: action.payload.platform ,
    });
};

export default gamesUiReducer;

