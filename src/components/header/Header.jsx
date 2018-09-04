import React, {PureComponent} from 'react';
import './Header.scss';

class Header extends PureComponent {

    render() {
        const BackComponent = this.props.onGoBack ? <div className={'header_go-back'}><button onClick={this.props.onGoBack}>Back</button></div> : null;
        return <div className={"header"}>
            {BackComponent}
            <span className={"header_title"}>{this.props.title}</span>
        </div>
    }
}

export default Header;