import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import Logo from "../../assets/Header Logo Dark Blue & Grey PNG.png";

function Navigation() {
  return (
    <Navbar className="bar" bg="light" expand="lg">
      <div className="navContainer">
        <img className="logo" src={Logo} alt="Modern Movement Logo" />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#agents">Agents</Nav.Link>
            <Nav.Link href="#contact">Contact Us</Nav.Link>
            <Nav.Link href="#mls">MLS</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  );
}

export default Navigation;
