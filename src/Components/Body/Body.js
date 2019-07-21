import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Container } from "react-bootstrap";
import "./Body.css";

class Body extends React.Component {
  render() {
    return (
      <div className="splashPage">
        <Container className="Intro" />
      </div>
    );
  }
}

export default Body;
