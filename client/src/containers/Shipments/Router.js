import React from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom"
import PageHeader from "../../shared/components/PageHeader";
import NotFound from "../NotFound/404";
import ViewShipments from "./Shipments";
import ViewShipment from "./ViewShipment";

const Shipments = ({ match }) => {
  return (
    <Container>
      <PageHeader
        header="Shipments"
        subheader="Check your shipments at a glance"
      />
      <Row>
        <Switch>
          <Route exact path={match.url} component={ViewShipments} />
          <Route path={`${match.url}/view/:id`} component={ViewShipment} />
          <Route component={NotFound} />
        </Switch>
      </Row>
    </Container>
  );
};

export default Shipments;
