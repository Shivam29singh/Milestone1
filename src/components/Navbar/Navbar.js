import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
class navigation extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark" sticky="right">
        <Navbar.Brand href="#home">Product-inventory Systeam</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link href="#deets">Dashboard</Nav.Link>
            <Nav.Link href="./MyProfile">My Profile</Nav.Link>
            <Nav.Link eventKey={2} href="./Login">
              Logout
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
export default navigation;
