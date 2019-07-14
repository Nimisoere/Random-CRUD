import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import {
  getShipments,
  viewShipment,
  deleteShipment,
  postShipments,
  resetPostShipment,
  resetViewShipment
} from "../shipments.actions";
import { shipmentActionConstants } from "../../constants/shipments.constants";
import { alertConstants } from "../../../Notifications/constants/alert.constants";

import fetchMock from "fetch-mock";

import { SHIPMENTS_API } from "../../../../constants/apiUrls";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("async actions", () => {
  afterEach(() => {
    fetchMock.restore();
  });

  it("creates GET_SHIPMENTS_SUCCESS when a request is sent", () => {
    fetchMock.getOnce(SHIPMENTS_API, {
      body: { response: [] },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: shipmentActionConstants.GET_SHIPMENTS_REQUEST },
      {
        type: shipmentActionConstants.GET_SHIPMENTS_SUCCESS,
        response: { response: [] }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(getShipments()).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions).toEqual(expectedActions);
    });
  });

  it("creates VIEW_SHIPMENT_SUCCESS when a request is sent", () => {
    fetchMock.getOnce(`${SHIPMENTS_API}/44`, {
      body: { response: {} },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { type: shipmentActionConstants.VIEW_SHIPMENTS_REQUEST, request: 44 },
      {
        type: shipmentActionConstants.VIEW_SHIPMENTS_SUCCESS,
        response: { response: {} }
      }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(viewShipment(44)).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(2);
      expect(actions).toEqual(expectedActions);
    });
  });

  it("creates POST_SHIPMENTS_SUCCESS when a request is sent", () => {
    fetchMock.postOnce(SHIPMENTS_API, {
      body: { response: {}, responseMessage: "success" },
      headers: { "content-type": "application/json" }
    });
    fetchMock.getOnce(SHIPMENTS_API, {
      body: { response: [], responseMessage: "success" },
      headers: { "content-type": "application/json" }
    });

    const expectedActions = [
      { request: {}, type: shipmentActionConstants.POST_SHIPMENTS_REQUEST },
      {
        response: { response: {}, responseMessage: "success" },
        type: shipmentActionConstants.POST_SHIPMENTS_SUCCESS
      },
      {
        meta: {
          form: "shipment_form"
        },
        type: "@@redux-form/RESET"
      },
      {
        alertType: "success",
        title: "Shipment saved successfully",
        message: "success",
        type: alertConstants.SHOW
      },
      { type: shipmentActionConstants.GET_SHIPMENTS_REQUEST },
      { type: shipmentActionConstants.POST_SHIPMENTS_RESET },
      { type: shipmentActionConstants.VIEW_SHIPMENTS_RESET }
    ];
    const store = mockStore({ todos: [] });

    return store.dispatch(postShipments({})).then(() => {
      const actions = store.getActions();
      expect(actions.length).toBe(7);
      expect(actions).toEqual(expectedActions);
    });
  });
  it(`Handle VIEW_SHIPMENTS_RESET`, () => {
    const expectedAction = {
      type: shipmentActionConstants.VIEW_SHIPMENTS_RESET
    };
    expect(resetViewShipment()).toEqual(expectedAction);
  });
  it(`RESET POST_SHIPMENTS_RESET`, () => {
    const expectedAction = {
      type: shipmentActionConstants.POST_SHIPMENTS_RESET
    };
    expect(resetPostShipment()).toEqual(expectedAction);
  });
});
