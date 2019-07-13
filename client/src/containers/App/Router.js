import React from "react";
import { Route, Switch } from "react-router-dom";
import Layout from "../Layout/index";
import MainWrapper from "../App/MainWrapper";

import Dashboard from "../Dashboard/Router";
import Shipments from "../Shipments/Router"

const Router = () => (
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
);

export default Router;
