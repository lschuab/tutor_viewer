import auth0 from 'auth0-js';
import history from '../history';

export default class Auth {
  // Please use your own credentials here

  isLoggedIn = false;
  auth0 = new auth0.WebAuth({
    domain: 'tutor-viewer.auth0.com',
    clientID: 'XVaD4Zg0gbctrYLyQr3oKnhswK8DK1k5',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/dash' : 'https://tutor-viewer.com/dash',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login = () => {
    console.log('login')
    this.auth0.authorize();
  }

  constructor() {
    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
    this.handleAuthentication = this.handleAuthentication.bind(this);
    this.isAuthenticated = this.isAuthenticated.bind(this);
  }

  handleAuthentication() {
    this.auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        this.setSession(authResult);
        history.replace('/dash');
      } else if (err) {
        history.replace('/dash');
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
    history.replace('/dash');
  }

  logout() {
    // Clear Access Token and ID Token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    window.location = 'https://tutor-viewer.auth0.com/v2/logout?returnTo=localhost%3A3000%2Fdash'

  }

  isAuthenticated() {
    // Check whether the current time is past the 
    // Access Token's expiry time
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'));
    return new Date().getTime() < expiresAt;
  }
}
