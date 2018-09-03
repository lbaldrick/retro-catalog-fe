import React, {PureComponent} from 'react';

class Header extends PureComponent {
    render() {
        return <div className={"header-container"}>
            <span className={"header-container_title"}>{this.props.title}</span>
        </div>
    }
}

export default Header;