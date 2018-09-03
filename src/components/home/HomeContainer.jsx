import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getPlatformList} from "../../redux/reducers/games-ui/Selectors";
import {selectPlatform} from "../../redux/actions/games-ui/Actions";
import {fetchGames} from "../../redux/actions/games/Actions";
import List from "../common/list/List.jsx";
import TileButton from "../common/button/TileButton.jsx";
import './HomeContainer.scss';

const mapStateToProps = (state) => {
    return {
        platforms: getPlatformList(state),
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onPlatformSelected: (id) => {
            dispatch(selectPlatform(id));
        },
    }
};

const ListComponent = List(TileButton);

class HomeContainer extends Component {
    onPlatformSelected = (id) => {
        console.log('onPlatformSelected ' + id)
        this.props.onPlatformSelected(id);
        this.props.history.push('/games');
    };

    render() {
        return <div className={'home-container'}>
            <ListComponent items={this.props.platforms} onClick={this.onPlatformSelected}/>
        </div>
    }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeContainer));