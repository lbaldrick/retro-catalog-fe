import React, {Component} from 'react';
import Header from "../header/Header.jsx";

const StandardLayout = (ContentComponent, title) => {
    return class Layout extends Component {
        render () {
            return <div className={"standard-layout"}>
                <Header title={title}/>
                <div className={"standard-layout_content"}>
                    <ContentComponent />
                </div>
            </div>;
        }
    }
};

export default StandardLayout;