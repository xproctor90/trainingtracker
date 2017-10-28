import React, { Component } from 'react';
import { Navbar, Button } from 'react-bootstrap';import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import UserHome from "./pages/UserHome";
import NoMatch from "./pages/NoMatch";
import Baseline from "./pages/Baseline";
import Nav from "./components/Nav";

// const App = () =>

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  render() {
    const { isAuthenticated } = this.props.auth;

    return (
      <div>
        <Navbar fluid>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Auth0 - React</a>
            </Navbar.Brand>
            <Button
              bsStyle="primary"
              className="btn-margin"
              onClick={this.goTo.bind(this, 'home')}
            >
              Home
            </Button>
            {
              !isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.login.bind(this)}
                  >
                    Log In
                  </Button>
                )
            }
            {
              isAuthenticated() && (
                  <Button
                    bsStyle="primary"
                    className="btn-margin"
                    onClick={this.logout.bind(this)}
                  >
                    Log Out
                  </Button>
                )
            }
          </Navbar.Header>
        </Navbar>
        {/* <Switch>
          <Route exact path="/" component={SignIn} />
          <Route exact path="/workout" component={UserHome} />
          <Route component={NoMatch} />
        </Switch> */}

      </div>
    );
  }
}

export default App;
  
//   <Router>
//     <div>
//       <Nav />
//       <Switch>
//         <Route exact path="/" component={SignIn} />
//         <Route exact path="/workout" component={UserHome} />
//         <Route component={NoMatch} />
//       </Switch>
//     </div>
//   </Router>;

// export default App;
