import React, {Component} from 'react';
import {getFetchingGamesInProgress, getFetchingGamesFailure,
    getFetchingGamesSuccessful, getTotalNumOfGames,} from "../../redux/reducers/games/Selectors";
import {
    getCurrentPageNumber,
    getGamesForCurrentPage,
    getIsAscending,
    getSelectedPlatform,
    getSortBy,
    getTotalPages,
} from "../../redux/reducers/games-ui/Selectors";
import {selectNextPageInGameList, selectPrevPageInGameList, sortGamesList, resetState} from "../../redux/actions/games-ui/Actions";
import {fetchGames,} from "../../redux/actions/games/Actions";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Spinner from "../common/progress/Spinner.jsx";
import ErrorMessage from "../common/feedback/ErrorMessage.jsx";
import GameListItem from "../../components/games/GameListItem.jsx";
import PaginatedList from "../../components/common/list/PaginatedList.jsx";
import './GamesContainer.scss';
import GameSort from "./GameSort.jsx";

const GamesList = PaginatedList(GameListItem);

const mapStateToProps = (state) => {
    return {
        currentPageNumber: getCurrentPageNumber(state),
        gamesForCurrentPage: getGamesForCurrentPage(state),
        isAscending: getIsAscending(state),
        sortBy: getSortBy(state),
        selectedPlatform: getSelectedPlatform(state),
        fetchingGamesInProgress: getFetchingGamesInProgress(state),
        fetchingGamesFailure: getFetchingGamesFailure(state),
        fetchingGamesSuccessful: getFetchingGamesSuccessful(state),
        totalNumOfGames: getTotalNumOfGames(state),
        totalNumOfPages: getTotalPages(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectNextPageInGameList: () => {
            dispatch(selectNextPageInGameList());
        },
        onSelectPrevPageInGameList: () => {
            dispatch(selectPrevPageInGameList());
        },
        onSortGamesList: (sortBy, isAscending) => {
            dispatch(sortGamesList(sortBy, isAscending));
        },
        fetchGames: (platform) => {
            dispatch(fetchGames(platform));
        },
        resetState: (platform) => {
            dispatch(resetState(platform));
        }

    }
};


class GamesContainer extends Component {

    componentDidMount() {
        console.log(JSON.stringify(this.props.match));
        this.props.fetchGames(this.props.match.params.platform);
    }

    componentWillUnmount() {
        this.props.resetState();
    }

    onNextPage = () => {
        if (this.props.currentPageNumber + 1 < this.props.totalNumOfPages) {
            this.props.onSelectNextPageInGameList();
        }
    };

    onPrevPage = () => {
        if (this.props.currentPageNumber ) {
            this.props.onSelectPrevPageInGameList();
        }
    };

    onSortList = (sortBy, isAscending) => {
        this.props.onSortGamesList(sortBy, isAscending);
    };

    render () {
        let ContentComponent = null;

        if (this.props.fetchingGamesInProgress) {
            ContentComponent = <Spinner/>
        } else if (this.props.fetchingGamesFailure) {
            ContentComponent = <ErrorMessage errorText={`Failed to fetch the ${this.props.platform} games list.`}
                                             titleText={'Sorry something went wrong'}/>
        } else if (this.props.fetchingGamesSuccessful) {
            ContentComponent = <div className={'games-container_list'}>
                <GameSort onSort={this.onSortList} selectedKey={this.props.sortBy}
                          isAscending={this.props.isAscending}/>
                <GamesList items={this.props.gamesForCurrentPage}
                           currentPage={this.props.currentPageNumber}
                           totalPages={this.props.totalNumOfPages}
                           onNextPage={this.onNextPage}
                           onPrevPage={this.onPrevPage}/>
            </div>
        }

        return <div className={'games-container'}>
            {ContentComponent}
        </div>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesContainer));