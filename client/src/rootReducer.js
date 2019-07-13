import { reducer as reduxFormReducer } from "redux-form";
import { combineReducers } from "redux";

import { sidebarReducer, themeReducer } from "./containers/Layout/reducers";
import { alert as notificationReducer } from "./containers/Notifications/reducers/alert.reducer";
import {
  shipments,
  postShipments,
  viewShipment
} from "./containers/Shipments/reducers";

export default combineReducers({
  form: reduxFormReducer,
  theme: themeReducer,
  sidebar: sidebarReducer,
  notification: notificationReducer,

  shipments,
  postShipments,
  viewShipment
});
