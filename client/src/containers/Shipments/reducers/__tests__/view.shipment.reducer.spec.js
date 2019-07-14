import { viewShipment } from "../view.shipment.reducers";
import { shipmentActionConstants } from "../../constants/shipments.constants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("View Shipment reducer", () => {
  it("should return the initial state", () => {
    expect(viewShipment(undefined, {})).toEqual(initialState);
  });

  it("should handle VIEW_SHIPMENTS_RESET", () => {
    expect(
      viewShipment(initialState, {
        type: shipmentActionConstants.VIEW_SHIPMENTS_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle VIEW_SHIPMENTS_REQUEST", () => {
    expect(
      viewShipment(initialState, {
        type: shipmentActionConstants.VIEW_SHIPMENTS_REQUEST,
        request: 44
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: 44
    });
  });

  it("should handle VIEW_SHIPMENTS_SUCCESS", () => {
    expect(
      viewShipment(initialState, {
        type: shipmentActionConstants.VIEW_SHIPMENTS_SUCCESS,
        response: { data: [] }
      })
    ).toEqual({
      ...initialState,
      response: { data: [] },
      loading: false,
      success: true,
      error: null
    });
  });

  it("should handle VIEW_SHIPMENTS_FAILURE", () => {
    expect(
      viewShipment(initialState, {
        type: shipmentActionConstants.VIEW_SHIPMENTS_FAILURE,
        error: { data: [] },
        loading: false,
        response: null,
        success: false
      })
    ).toEqual({
      ...initialState,
      error: { data: [] }
    });
  });
});
