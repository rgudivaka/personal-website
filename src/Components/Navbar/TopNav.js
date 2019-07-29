import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import "./TopNav.css";
import Container from "react-bootstrap/Container";

class TopNav extends React.Component {
  render() {
    return (
      <Navbar Bsprefix = "Navbar topnav" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Rishi.</Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#experience">Experience</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}

export default TopNav;
