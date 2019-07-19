import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import Nav from "./Components/Navbar/Nav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
const App = () => {
  return (
    <Container bsPrefix="noPadding container" fluid>
      <Row noGutters>
        <Col lg={true}>
          <Nav />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
