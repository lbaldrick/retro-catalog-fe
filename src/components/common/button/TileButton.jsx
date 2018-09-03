import React, {PureComponent} from 'react';
import './TileButton.scss';

class TileButton extends PureComponent {
    onClick = () => {
        this.props.onClick(this.props.id);
    };
    render() {
        return <div className={'tile-button'} onClick={this.onClick}>
            <span className={'tile-button_title'}>{this.props.text}</span>
            <img src={this.props.image} className={'tile-button_image'}/>
        </div>
    }
}

export default TileButton;