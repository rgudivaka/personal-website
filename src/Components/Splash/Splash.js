import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Container, Jumbotron, Image } from "react-bootstrap";
import "./Splash.css";
import profile from "../../images/profile.jpeg";
class Splash extends React.Component {
  render() {
    return (
      <Jumbotron className="background" fluid>
        <Container align="center" className="splashPage">
          {/* <Image src={profile} rounded className="profileImage" /> */}
          <h1 className="display-3 white-text">Rishi Gudivaka</h1>
          <p className="white-text">McCormick School of Engineering '21</p>
          <p className="white-text">B.S. Computer Science</p>
          <p className="white-text">Minor in Economics</p>
        </Container>
      </Jumbotron>
    );
  }
}

export default Splash;
