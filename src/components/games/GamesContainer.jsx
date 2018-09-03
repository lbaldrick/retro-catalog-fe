import React, {Component} from 'react';
import {getFetchingGamesInProgress, getFetchingGamesFailure,
    getFetchingGamesSuccessful, getPlatform, getTotalNumOfGames,} from "../../redux/reducers/games/Selectors";
import {
    getCurrentPageNumber,
    getGamesForCurrentPage,
    getIsAscending,
    getSelectedPlatform,
    getSortBy,
} from "../../redux/reducers/games-ui/Selectors";
import {selectNextPageInGameList, selectPrevPageInGameList, sortGamesList,} from "../../redux/actions/games-ui/Actions";
import {fetchGames,} from "../../redux/actions/games/Actions";
import {withRouter} from "react-router-dom";
import connect from "react-redux/es/connect/connect";
import Spinner from "../common/progress/Spinner.jsx";
import ErrorMessage from "../common/feedback/ErrorMessage.jsx";
import GameListItem from "../../components/games/GameListItem.jsx";
import PaginatedList from "../../components/common/list/PaginatedList.jsx";

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
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSelectNextPageInGameList: () => {

        },
        onSelectPrevPageInGameList: () => {

        },
        onSortGamesList: (id) => {

        },
        fetchGames: (platform) => {
            dispatch(fetchGames(platform));
        }

    }
};


class GamesContainer extends Component {

    componentDidMount() {
        this.props.fetchGames(this.props.selectedPlatform);
    }

    onNextPage = () => {
        this.props.onSelectNextPageInGameList();
    };

    onPrevPage = () => {
        this.props.onSelectPrevPageInGameList();
    };

    onSortList = () => {
        this.props.onSortGamesList();
    };

    render () {
        let ContentComponent = null;

        if (this.props.fetchingGamesInProgress) {
            ContentComponent = <Spinner/>
        } else if (this.props.fetchingGamesFailure) {
            ContentComponent = <ErrorMessage errorText={`Failed to fetch the ${this.props.platform} games list.`}
                                             titleText={'Sorry something went wrong'}/>
        } else if (this.props.fetchingGamesSuccessful) {
            ContentComponent = <GamesList items={this.props.gamesForCurrentPage}
                                          currentPage={this.props.currentPageNumber}
                                          totalPages={this.props.totalNumOfGames}
                                          onNextPage={this.onNextPage}
                                          onPrevPage={this.onPrevPage}/>;
        }

        return <div className={'games-container'}>
            {ContentComponent}
        </div>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(GamesContainer));