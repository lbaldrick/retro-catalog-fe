import React, {PureComponent} from 'react';
import './GameSort.scss';
import GameSortItem from "./GameSortItem.jsx";


class GameSort extends PureComponent {
    render() {
        return <div className={'game-sort'}>
            <div className={'game-sort_title'}>Sort Controls</div>
            <div className={'game-sort_controls'}>
                <GameSortItem sortKey={'price'}
                               displayName={'Price Ascending'}
                               isAscending={true}
                               isSelected={this.props.selectedKey === 'price' && this.props.isAscending}
                              sort={this.props.onSort}
                />
                <GameSortItem sortKey={'price'}
                               displayName={'Price Descending'}
                               isAscending={false}
                               isSelected={this.props.selectedKey === 'price' && !this.props.isAscending}
                              sort={this.props.onSort}
                />
                <GameSortItem sortKey={'rating'}
                               displayName={'Rating Ascending'}
                               isAscending={true}
                               isSelected={this.props.selectedKey === 'rating' && this.props.isAscending}
                              sort={this.props.onSort}
                />
                <GameSortItem sortKey={'rating'}
                               isAscending={false}
                               displayName={'Rating Descending'}
                               isSelected={this.props.selectedKey === 'rating' && !this.props.isAscending}
                              sort={this.props.onSort}
                />
            </div>
        </div>
    }
}

export default GameSort;