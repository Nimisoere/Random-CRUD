import React from "react";
import { Container, Row } from "reactstrap";

import { Route, Switch } from "react-router-dom";

import PageHeader from "../../shared/components/PageHeader";
import NotFound from "../NotFound/404";
import ViewShipments from "./Shipments";

const Shipments = ({ match }) => (
  <Container>
    <PageHeader
      header="Shipments"
      subheader="Check your shipments at a glance"
    />
    <Row>
      <Switch>
        <Route exact path={match.url} component={ViewShipments} />
        <Route component={NotFound} />
      </Switch>
    </Row>
  </Container>
);

export default Shipments;
