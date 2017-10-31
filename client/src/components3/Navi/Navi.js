import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';
import { login, logout, isLoggedIn } from '../../utils/auth-service';

export default class Navi extends React.Component {

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

  // login() {
  //   lock.show(function(err, profile, token) {
  //     if (err) {
  //       // Error callback
  //       console.error("Something went wrong: ", err);
  //     } else {
  //       // Success calback  
  
  //       // Save the JWT token.
  //       localStorage.setItem('userToken', token);
  //       // Save the profile
  //       localStorage.setItem('userProfile', JSON.stringify(profile));
  //     }
  //   });
  // }

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            {
              ( isLoggedIn() ) ? <NavLink href="/" active>Log Out</NavLink> : <NavLink href="/workout" active>Sign In</NavLink>
            }  
            </NavItem>
          <NavItem>
            <NavLink href="/Baseline" active>Base Line</NavLink>
          </NavItem>
          <NavItem>
            {
              ( isLoggedIn() ) ? <NavLink href="/workout" active>Workout</NavLink> : ''
            }  
            </NavItem>
          <NavItem>
            <NavLink href="#" active>Work Out Tips</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#" active>About</NavLink>
          </NavItem>
          <NavItem>
           <NavLink href="https://github.com/xproctor90/trainingtracker" active>GitHub</NavLink>
          </NavItem>
        </Nav>
      </div>
    );
  }
}
