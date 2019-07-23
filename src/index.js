import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import TopNav from "./Components/Navbar/TopNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Splash from "./Components/Splash/Splash";
const App = () => {
  return (
    <Container bsPrefix="noPadding container" fluid>
      <Row noGutters>
        <Col lg={true}>
          <TopNav />
          <Splash />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
