import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { Navbar, Button } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Route, Router } from 'react-router-dom';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import AboutPage from "./pages/AboutPage";
// import UserHome from "./pages/UserHome";
import Workouts from './components/Workouts'; //Home
import Home from "./pages/Home/Home.js";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline/Baseline.js";
// import Navi from "./components3/Navi"; //App
import Foot from "./components3/Footer";
import history from './history';
import Callback from './components/Callback/Callback';
import Auth from './components/Auth/Auth';
import App from './App';


//import Auth0 from "./components/auth/auth.js";  
const auth = new Auth();

const handleAuthentication = (nextState, replace) => {
  if (/access_token|id_token|error/.test(nextState.location.hash)) {
    auth.handleAuthentication();
  }
}

const Routes = () =>

   <Router history={history} component={App}>
     <div>
       {/* <App /> */}
       {/* <Switch> */}
         {/* <Route exact path="/" component={SignIn} /> */}
         <Route path="/" render={(props) => <App auth={auth} {...props} /> } />
         <Route exact path="/Home" component={Home} />
         <Route path="/workout" render={(props) => <Workouts auth={auth} {...props} />} />
         <Route path="/callback" render={(props) => {
            handleAuthentication(props);
            return <Callback {...props} /> 
          }}/>
         <Route exact path="/SignUp" component={SignUp} />
         <Route exact path="/AboutPage" component={AboutPage} />
         {/* Replaced <Route exact path="/workout" component={UserHome} /> See line 38*/}
         <Route exact path="/Baseline" component={Baseline} />
         {/* <Route component={NoMatch} /> */}
       {/* </Switch> */}
       <Foot />
     </div>
   </Router>;

export default Routes;
