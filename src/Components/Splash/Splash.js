import React from "react";
import ReactDOM from "react-dom";
import { Row, Col, Container, Card, Image } from "react-bootstrap";
import "./Splash.css";
import profile from "../../images/profile.jpeg";
class Splash extends React.Component {
  render() {
    return (
      <Container className="About">
        <Card>
          <Row noGutters>
            <Card.Img
              className="card-img-bottom profile"
              variant="top"
              src={profile}
            />
            <Col>
              <Card.Body>
                <Card.Title className="display-4">About</Card.Title>
                <Card.Text>Rishi Gudivaka</Card.Text>
                <Card.Text>McCormick School of Engineering</Card.Text>
                <Card.Text>B.S. Computer Science</Card.Text>
                <Card.Text>Minor in Economics</Card.Text>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    );
  }
}

export default Splash;

{
  /* <div class="card">
        <div class="row no-gutters">
            <div class="col-auto">
                <img src="//placehold.it/200" class="img-fluid" alt="">
            </div>
            <div class="col">
                <div class="card-block px-2">
                    <h4 class="card-title">Title</h4>
                    <p class="card-text">Description</p>
                    <a href="#" class="btn btn-primary">BUTTON</a>
                </div>
            </div>
        </div>
        <div class="card-footer w-100 text-muted">
            Footer stating cats are CUTE little animals
        </div>
    </div> */
}
