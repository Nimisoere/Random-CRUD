import React, { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "../App/MainWrapper";
import Loading from "../../shared/components/Loading";

const Dashboard = lazy(() => import("../Dashboard/Router"));
const Shipments = lazy(() => import("../Shipments/Router"));

const Router = () => (
  <Suspense fallback={<Loading />}>
    <Switch>
      <MainWrapper>
        <main>
          <div>
            <Layout />
            <div className="container__wrap">
              <Route exact path="/" component={Dashboard} />
              <Route path="/shipments" component={Shipments} />
            </div>
          </div>
        </main>
      </MainWrapper>
    </Switch>
  </Suspense>
);

export default Router;
