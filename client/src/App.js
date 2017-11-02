import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavbarBrand, NavbarToggler, NavLink } from 'reactstrap';
import './App.css';

export default class App extends React.Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }
  
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    const  { isAuthenticated }  = this.props.auth;

    return (
      <div>
        <Nav pills >
          <NavItem>
            <NavbarBrand href="/" >Training Tracker</NavbarBrand>
          </NavItem>
          <NavItem>
            <NavLink href="/Home" active>Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/AboutPage" active>About</NavLink>
          </NavItem>
          {
            !isAuthenticated() && (
              ''
            )
          }
          {
            isAuthenticated() && (
            <NavItem>
              <NavLink href="/Baseline" active>Base Line</NavLink>
            </NavItem>
            )
          }
          {
            !isAuthenticated() && (
              ''
            )
          }
          {
            isAuthenticated() && (
          <NavItem>
            <NavLink href="/workout" active>Workout</NavLink>
          </NavItem>
            )
          }
          {/* <NavItem>
           <NavLink href="https://github.com/xproctor90/trainingtracker" active>GitHub</NavLink>
          </NavItem> */}
          {
            !isAuthenticated() && (
          <NavItem>
            <NavLink 
              onClick={this.login.bind(this)}
              > Sign In
            </NavLink>
          </NavItem>
            )
          }
          {
            isAuthenticated() && (
              <NavItem>
                <NavLink
                  onClick={this.logout.bind(this)}
                > Log Out
                </NavLink>
              </NavItem>
            )
          }
        </Nav>
      </div>
    );
  }
}
