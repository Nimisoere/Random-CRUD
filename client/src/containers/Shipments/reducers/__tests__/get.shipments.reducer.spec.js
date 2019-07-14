import { shipments } from "../get.shipments.reducers";
import { shipmentActionConstants } from "../../constants/shipments.constants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("GET Shipments reducer", () => {
  it("should return the initial state", () => {
    expect(shipments(undefined, {})).toEqual(initialState);
  });

  it("should handle GET_SHIPMENTS_RESET", () => {
    expect(
      shipments(initialState, {
        type: shipmentActionConstants.GET_SHIPMENTS_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle GET_SHIPMENTS_REQUEST", () => {
    expect(
      shipments(initialState, {
        type: shipmentActionConstants.GET_SHIPMENTS_REQUEST
      })
    ).toEqual({
      ...initialState,
      loading: true
    });
  });

  it("should handle GET_SHIPMENTS_SUCCESS", () => {
    expect(
      shipments(initialState, {
        type: shipmentActionConstants.GET_SHIPMENTS_SUCCESS,
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

  it("should handle GET_SHIPMENTS_FAILURE", () => {
    expect(
      shipments(initialState, {
        type: shipmentActionConstants.GET_SHIPMENTS_FAILURE,
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
