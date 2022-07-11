import React from "react";
import { Row, Col, Container } from "react-bootstrap";

export default function Footer() {
  return (
    <>
      <div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/b2/Borobudur_%28Central_Java%2C_Indonesia%29_%2851111682742%29.gif"></img>
      </div>
      <div className="footer_wrap">
        <Container bg="light" expand="lg">
          <Row>
            <Col>
              <p>Links:-</p>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
              </ul>
            </Col>
            <Col>
              <p>Links:-</p>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
              </ul>
            </Col>
            <Col>
              <p>Links:-</p>
              <ul>
                <li>Link 1</li>
                <li>Link 2</li>
                <li>Link 3</li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
