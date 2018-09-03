import React, { Component } from 'react';
import authService from '../services/Authentication';

class App extends Component {

    login () {
        authService.login();
    }

    render() {
        return <div className={'app'}><button onClick={this.login.bind(this)}>Login</button></div>
    }
}

export default App;