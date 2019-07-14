import { shipmentsService } from "../services/shipments.service";
import { show as showAlert } from "../../Notifications/actions/alert.actions";
import { messages } from "../../../constants/app.constants";
import {
  shipmentActionConstants,
  nameSpace
} from "../constants/shipments.constants";
import { createRequestBody } from "../factories/shipments.factory";
import { reset } from "redux-form";

export const getShipments = () => {
  return async dispatch => {
    dispatch(request());
    try {
      const response = await shipmentsService.getShipments();
      response && dispatch(success(response));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          "Failed to get shipments",
          error ? error.message : messages.GENERIC_ERROR
        )
      );
    }
  };

  function request() {
    return {
      type: shipmentActionConstants[`GET_${nameSpace}_REQUEST`]
    };
  }
  function success(response) {
    return {
      type: shipmentActionConstants[`GET_${nameSpace}_SUCCESS`],
      response
    };
  }
  function failure(error) {
    return {
      type: shipmentActionConstants[`GET_${nameSpace}_FAILURE`],
      error
    };
  }
};

export const viewShipment = id => {
  return async dispatch => {
    dispatch(request(id));
    try {
      const response = await shipmentsService.viewShipment(id);
      response && dispatch(success(response));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          `Failed to get selected shipment: ${id}`,
          error ? error.message : messages.GENERIC_ERROR
        )
      );
    }
  };

  function request(request) {
    return {
      type: shipmentActionConstants[`VIEW_${nameSpace}_REQUEST`],
      request
    };
  }
  function success(response) {
    return {
      type: shipmentActionConstants[`VIEW_${nameSpace}_SUCCESS`],
      response
    };
  }
  function failure(error) {
    return {
      type: shipmentActionConstants[`VIEW_${nameSpace}_FAILURE`],
      error
    };
  }
};

export const deleteShipment = id => {
  return async dispatch => {
    dispatch(request(id));
    try {
      const response = await shipmentsService.deleteShipment(id);
      response && dispatch(success(response));
      dispatch(getShipments());
      dispatch(showAlert("success", `Deleted shipment with ID: ${id}`));
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          `Failed to delete shipment: ${id}`,
          error ? error.message : messages.GENERIC_ERROR
        )
      );
    }
  };

  function request(request) {
    return {
      type: shipmentActionConstants[`DELETE_${nameSpace}_REQUEST`],
      request
    };
  }
  function success(response) {
    return {
      type: shipmentActionConstants[`DELETE_${nameSpace}_SUCCESS`],
      response
    };
  }
  function failure(error) {
    return {
      type: shipmentActionConstants[`DELETE_${nameSpace}_FAILURE`],
      error
    };
  }
};

export const postShipments = (values, id) => {
  const requestBody = createRequestBody(values);
  return async dispatch => {
    dispatch(request(requestBody));
    try {
      const response = await shipmentsService.postShipments(requestBody, id);
      dispatch(success(response));
      dispatch(reset("shipment_form"));
      dispatch(
        showAlert(
          "success",
          id ? "Shipment updated successfully" : "Shipment saved successfully",
          response && response.responseMessage
        )
      );
      dispatch(getShipments());
    } catch (error) {
      dispatch(failure(error));
      dispatch(
        showAlert(
          "danger",
          id ? "Failed to update shipment" : "Failed to save shipment",
          error ? error.message : messages.GENERIC_ERROR
        )
      );
    }
  };

  function request() {
    return { type: shipmentActionConstants[`POST_${nameSpace}_REQUEST`] };
  }
  function success(response) {
    return {
      type: shipmentActionConstants[`POST_${nameSpace}_SUCCESS`],
      response
    };
  }
  function failure(error) {
    return {
      type: shipmentActionConstants[`POST_${nameSpace}_FAILURE`],
      error
    };
  }
};

export const resetViewShipment = () => {
  return { type: shipmentActionConstants[`VIEW_${nameSpace}_RESET`] };
};

export const resetPostShipment = () => {
  return { type: shipmentActionConstants[`POST_${nameSpace}_RESET`] };
};
