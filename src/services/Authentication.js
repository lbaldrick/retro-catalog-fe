import auth0 from 'auth0-js';
import history from '../routes/History';

class Auth {
    constructor() {
        this.auth0 = new auth0.WebAuth({
            domain: 'retro.auth0.com',
            clientID: 'npOJi86cdp3VY0OAkxvSrs06vAqBLE3q',
            redirectUri: 'http://localhost:8080/callback',
            audience: 'https://retro.auth0.com/userinfo',
            responseType: 'token id_token',
            scope: 'openid'
        });
        this.login = this.login.bind(this);
        this.logout = this.logout.bind(this);
        this.handleAuthentication = this.handleAuthentication.bind(this);
        this.isAuthenticated = this.isAuthenticated.bind(this);
    }

    handleAuthentication() {
        this.auth0.parseHash((err, authResult) => {
            if (authResult && authResult.accessToken && authResult.idToken) {
                this.setSession(authResult);
                history.replace('/home');
            } else if (err) {
                history.replace('/home');
                console.log(err);
            }
        });
    }

    setSession(authResult) {
        // Set the time that the Access Token will expire at
        let expiresAt = JSON.stringify((authResult.expiresIn * 1000) + new Date().getTime());
        localStorage.setItem('access_token', authResult.accessToken);
        localStorage.setItem('id_token', authResult.idToken);
        localStorage.setItem('expires_at', expiresAt);
        // navigate to the home route
        history.replace('/home');
    }

    logout() {
        // Clear Access Token and ID Token from local storage
        localStorage.removeItem('access_token');
        localStorage.removeItem('id_token');
        localStorage.removeItem('expires_at');
        // navigate to the home route
        history.replace('/');
    }

    isAuthenticated() {
        // Check whether the current time is past the
        // Access Token's expiry time
        let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
        return new Date().getTime() < expiresAt;
    }

    // launch auth0 universal user page
    login() {
        this.auth0.authorize();
    }
}

const authService = new Auth();

export default authService;