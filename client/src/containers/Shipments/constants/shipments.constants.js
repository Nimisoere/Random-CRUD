import { createCRUDConstants } from "../../../utils/redux.utils";

export const nameSpace = "SHIPMENTS";
export const shipmentActionConstants = createCRUDConstants(nameSpace, ["DELETE"]);
