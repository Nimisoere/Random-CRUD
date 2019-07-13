import { apiCall } from "../../../utils/api.utils";
import { SHIPMENTS_API } from "../../../constants/apiUrls";

export const shipmentsService = {
  getShipments,
  postShipments,
  viewShipment
};

function getShipments() {
  return apiCall("GET", SHIPMENTS_API);
}

function postShipments(request, id) {
  const method = id ? "PUT" : "POST";
  return apiCall(method, SHIPMENTS_API, null, request);
}

function viewShipment(id) {
  return apiCall("GET", `${SHIPMENTS_API}/${id}`);
}
