import {
  shipmentActionConstants,
  nameSpace
} from "../constants/shipments.constants";

const initialState = {
  loading: false,
  success: false,
  request: null,
  response: null,
  error: null
};

export const deleteShipment = (state = initialState, action) => {
  switch (action.type) {
    case shipmentActionConstants[`DELETE_${nameSpace}_REQUEST`]:
      return {
        ...state,
        loading: true,
        request: action.request
      };
    case shipmentActionConstants[`DELETE_${nameSpace}_SUCCESS`]:
      return {
        ...state,
        loading: false,
        success: true,
        response: action.response,
        error: null
      };
    case shipmentActionConstants[`DELETE_${nameSpace}_FAILURE`]:
      return {
        ...state,
        loading: false,
        response: null,
        success: false,
        error: action.error
      };
    case shipmentActionConstants[`DELETE_${nameSpace}_RESET`]:
      return {
        ...state,
        ...initialState
      };
    default:
      return state;
  }
};
