import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import {configureStore} from '../redux/Store.js';
import Provider from "react-redux/es/components/Provider";
import History from "../routes/History";
import AuthenticationContainer from "../components/login/AuthenticationContainer.jsx";
import HomeContainer from "../components/home/HomeContainer.jsx";
import GamesContainer from "../components/games/GamesContainer.jsx";
import App from "../components/App.jsx";
import StandardLayout from "../components/layouts/StandardLayout.jsx";


const createRoutes = () => {
    const store = configureStore();
    return (
        <Provider store={store}>
            <Router history={History}>
                <Switch>
                    <Route exact path="/" component={App} />
                    <Route exact path="/callback" component={AuthenticationContainer} />
                    <Route exact path="/home" component={StandardLayout(HomeContainer,  "Select a platform")} />
                    <Route exact path="/games" component={StandardLayout(GamesContainer,  "Games list",  History.goBack)} />
                </Switch>
            </Router>
        </Provider>
    );
};

export default createRoutes;
