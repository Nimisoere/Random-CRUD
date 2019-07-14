/*Polyfills */
import "core-js/es6/map";
import "core-js/es6/set";
import "raf/polyfill";
import "core-js/fn/array/find";
import "core-js/fn/string/ends-with";
import "./utils/matchMedia";
import "./utils/MutationObserver";
/*Polyfills */

import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./store";

import App from "./containers/App/App";
import * as serviceWorker from "./serviceWorker";

render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();