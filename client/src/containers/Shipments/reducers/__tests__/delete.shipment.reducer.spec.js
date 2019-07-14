import { deleteShipment } from "../delete.shipment.reducers";
import { shipmentActionConstants } from "../../constants/shipments.constants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("Delete Shipments reducer", () => {
  it("should return the initial state", () => {
    expect(deleteShipment(undefined, {})).toEqual(initialState);
  });

  it("should handle DELETE_SHIPMENTS_RESET", () => {
    expect(
      deleteShipment(initialState, {
        type: shipmentActionConstants.DELETE_SHIPMENTS_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle DELETE_SHIPMENTS_REQUEST", () => {
    expect(
      deleteShipment(initialState, {
        type: shipmentActionConstants.DELETE_SHIPMENTS_REQUEST,
        request: 44
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: 44
    });
  });

  it("should handle DELETE_SHIPMENTS_SUCCESS", () => {
    expect(
      deleteShipment(initialState, {
        type: shipmentActionConstants.DELETE_SHIPMENTS_SUCCESS,
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

  it("should handle DELETE_SHIPMENTS_FAILURE", () => {
    expect(
      deleteShipment(initialState, {
        type: shipmentActionConstants.DELETE_SHIPMENTS_FAILURE,
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
