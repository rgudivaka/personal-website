import React from "react";
import ReactDOM from "react-dom";
import "./style/app.css";
import TopNav from "./Components/Navbar/TopNav";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Body from "./Components/Body/Body";
const App = () => {
  return (
    <Container bsPrefix="noPadding container" fluid>
      <Row noGutters>
        <Col lg={true}>
          <TopNav />
          <Body />
        </Col>
      </Row>
    </Container>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
