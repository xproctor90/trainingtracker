import auth0 from 'auth0-js';
import history from '../../history';


export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'training-tracker.auth0.com',
    clientID: 'v0NZFG6fEe3yJxlz86kCtD4E8yZFeTgi',
    redirectUri: process.env.NODE_ENV === 'development' ? 'http://localhost:3000/callback' :'https://training-tracker-app.heroku.com/workout',
    audience: 'https://training-tracker.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }

  logout() {
    // Clear access token and ID token from local storage
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    // navigate to the home route
    history.replace('/');
  }
}