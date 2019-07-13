import React from "react";
import { Container, Row, Col, Card, CardBody } from "reactstrap";

export const NotFound = () => (
  <Container>
    <Row className="text-center">
      <Col md={12}>
        <Card>
          <CardBody>
            <h1 className="font-weight-bold">404</h1>
            <p>Page not found</p>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default NotFound;
