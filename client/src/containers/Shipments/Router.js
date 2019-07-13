import React, { useEffect } from "react";
import { Container, Row } from "reactstrap";
import { Route, Switch } from "react-router-dom";

import { connect } from "react-redux";
import { getShipments } from "./actions/shipments.actions";

import PageHeader from "../../shared/components/PageHeader";
import NotFound from "../NotFound/404";
import ViewShipments from "./Shipments";

const Shipments = ({ match, dispatch, shipments }) => {
  function fetchShipments() {
    dispatch(getShipments());
  }

  useEffect(() => {
    dispatch(getShipments());
  }, [dispatch]);

  return (
    <Container>
      <PageHeader
        header="Shipments"
        subheader="Check your shipments at a glance"
      />
      <Row>
        <Switch>
          <Route
            exact
            path={match.url}
            render={() => (
              <ViewShipments dataState={shipments} fetchData={fetchShipments} />
            )}
          />
          <Route component={NotFound} />
        </Switch>
      </Row>
    </Container>
  );
};

export default connect(state => ({
  shipments: state.shipments
}))(Shipments);
