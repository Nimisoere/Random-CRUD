import React, { useState, Fragment, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';

import Router from "./Router";

import ScrollToTop from "./ScrollToTop";

import "bootstrap/dist/css/bootstrap.css";
import "../../styles/app.scss";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [loaded, setLoaded] = useState(false);

  const loadPage = () => {
    window.addEventListener("load", () => {
      setLoading({ loading: false });
      setTimeout(() => setLoaded({ loaded: true }), 200);
    });
  };

  useEffect(() => {
    loadPage();
  }, []);

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Fragment>
          {!loaded && (
            <div className={`load${loading ? "" : " loaded"}`}>
              <div className="load__icon-wrap">
                <svg className="load__icon">
                  <path
                    fill="#003553"
                    d="M12,4V2A10,10 0 0,0 2,12H4A8,8 0 0,1 12,4Z"
                  />
                </svg>
              </div>
            </div>
          )}
          <div>
            <Router />
          </div>
        </Fragment>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default hot(module)(App);
