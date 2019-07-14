import React, { lazy, Suspense } from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";
import PageHeader from "../../shared/components/PageHeader";
import Loading from "../../shared/components/Loading";

const NotFound = lazy(() => import("../NotFound/404"));
const ViewShipments = lazy(() => import("./Shipments"));
const ViewShipment = lazy(() => import("./ViewShipment"));
const ShipmentForm = lazy(() => import("./ShipmentForm"));

const Shipments = ({ match }) => {
  return (
    <Container>
      <PageHeader
        header="Shipments"
        subheader="Check your shipments at a glance"
      />
      <Row>
        <Suspense fallback={<Loading />}>
          <Switch>
            <Route exact path={match.url} component={ViewShipments} />
            <Route path={`${match.url}/view/:id`} component={ViewShipment} />
            <Route path={`${match.url}/edit/:id`} component={ShipmentForm} />
            <Route path={`${match.url}/new`} component={ShipmentForm} />
            <Route component={NotFound} />
          </Switch>
        </Suspense>
      </Row>
    </Container>
  );
};

export default Shipments;
