import React from "react";
import { Container, Row } from "reactstrap";

import { Route, Switch } from "react-router-dom";

import PageHeader from "../../shared/components/PageHeader";
import NotFound from "../NotFound/404";
import DashboardComponent from "./Dashboard";

const Dashboard = ({ match }) => (
  <Container>
    <PageHeader
      header="Dashboard"
      subheader="Welcome to freight hub shipments"
    />
    <Row>
      <Switch>
        <Route exact path={match.url} component={DashboardComponent} />
        <Route component={NotFound} />
      </Switch>
    </Row>
  </Container>
);

export default Dashboard;
