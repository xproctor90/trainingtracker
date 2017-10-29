import React from 'react';
import { Nav, NavItem, NavDropdown, DropdownItem, DropdownToggle, DropdownMenu, NavLink } from 'reactstrap';



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

  render() {
    return (
      <div>
        <Nav pills>
          <NavItem>
            <NavLink href="/" active>Sign In</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/Baseline" active>Base Line</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/workout" active>Workout</NavLink>
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
