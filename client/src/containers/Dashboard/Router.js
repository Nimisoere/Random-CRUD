import React, { Suspense, lazy } from "react";
import { Container, Row } from "reactstrap";

import { Route, Switch } from "react-router-dom";

import PageHeader from "../../shared/components/PageHeader";
import Loading from "../../shared/components/Loading";

const NotFound = lazy(() => import("../NotFound/404"));
const DashboardComponent = lazy(() => import("./Dashboard"));

const Dashboard = ({ match }) => (
  <Container>
    <PageHeader
      header="Dashboard"
      subheader="Welcome to freight hub shipments"
    />
    <Row>
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route exact path={match.url} component={DashboardComponent} />
          <Route component={NotFound} />
        </Switch>
      </Suspense>
    </Row>
  </Container>
);

export default Dashboard;
