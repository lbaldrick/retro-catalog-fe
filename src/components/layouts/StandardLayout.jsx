import React, {Component} from 'react';
import Header from "../header/Header.jsx";

const StandardLayout = (ContentComponent, title, onGoBack) => {
    return class Layout extends Component {
        render () {
            return <div className={"standard-layout"}>
                <Header title={title} onGoBack={onGoBack}/>
                <div className={"standard-layout_content"}>
                    <ContentComponent />
                </div>
            </div>;
        }
    }
};

export default StandardLayout;