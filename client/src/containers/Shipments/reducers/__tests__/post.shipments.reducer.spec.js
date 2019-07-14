import { postShipments } from "../post.shipments.reducers";
import { shipmentActionConstants } from "../../constants/shipments.constants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

describe("POST Shipments reducer", () => {
  it("should return the initial state", () => {
    expect(postShipments(undefined, {})).toEqual(initialState);
  });

  it("should handle POST_SHIPMENTS_REQUEST", () => {
    expect(
      postShipments(initialState, {
        type: shipmentActionConstants.POST_SHIPMENTS_RESET
      })
    ).toEqual(initialState);
  });

  it("should handle POST_SHIPMENTS_REQUEST", () => {
    expect(
      postShipments(initialState, {
        type: shipmentActionConstants.POST_SHIPMENTS_REQUEST,
        request: {}
      })
    ).toEqual({
      ...initialState,
      loading: true,
      request: {}
    });
  });

  it("should handle POST_SHIPMENTS_SUCCESS", () => {
    expect(
      postShipments(initialState, {
        type: shipmentActionConstants.POST_SHIPMENTS_SUCCESS,
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

  it("should handle POST_SHIPMENTS_FAILURE", () => {
    expect(
      postShipments(initialState, {
        type: shipmentActionConstants.POST_SHIPMENTS_FAILURE,
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
