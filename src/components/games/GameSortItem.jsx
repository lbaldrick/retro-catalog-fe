import React, {PureComponent} from 'react';



class GameSortItem extends PureComponent {

    onItemClick = () => {
        this.props.sort(this.props.sortKey, this.props.isAscending)
    };

    render() {
        const classes = this.props.isSelected ? 'game-sort-item--selected' : '';
        return <div className={`game-sort-item ${classes} button`} onClick={this.onItemClick}>
            <span>{this.props.displayName}</span>
        </div>
    }
}

export default GameSortItem;