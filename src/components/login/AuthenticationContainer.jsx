import React, {Component} from 'react';
import Spinner from '../common/progress/Spinner';
import authService from '../../services/Authentication';

const handleAuthentication = () => {
    if (/access_token|id_token|error/.test(window.location.hash)) {
        authService.handleAuthentication();
    }
};

class AuthenticationContainer extends Component {


    componentDidMount() {
        handleAuthentication();
    }


    render() {
        return <div className={'authentication-container'}>
            <Spinner />
        </div>
    }
}

export default AuthenticationContainer;