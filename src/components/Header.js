import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  handleClick = () => {
    if (!this.props.isLoggedIn) {
      this.props.auth.login()
    } else {
      this.props.auth.logout()
    }
    this.props.checkAuthentication && this.props.checkAuthentication()
  }

  render() {
    return (
      <div>
        <Navbar 
          light
          expand="md"
          style={{
            backgroundColor: "#07889B"
          }}
        >
          <NavbarBrand 
            style={{
              color: "white",
              fontWeight: "bold"
            }} 
            className="ml-2"
            href="/dash"
          >Website Tutor Schedule - Dashboard</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink 
                  style={{
                    color: "white",
                    fontWeight: "bold"
                  }} 
                  className="mr-3"
                  onClick={() => this.handleClick()}
                  href="#void"
                >{this.props.isLoggedIn ? 'LOGOUT' : 'LOGIN'}</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}