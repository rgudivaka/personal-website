import React from "react";
import ReactDOM from "react-dom";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

class Nav extends React.Component {
  render() {
    return (
      <Navbar bg="light">
        <Navbar.Brand href="#home">Rishi Gudivaka</Navbar.Brand>
      </Navbar>
    );
  }
}

export default Nav;
