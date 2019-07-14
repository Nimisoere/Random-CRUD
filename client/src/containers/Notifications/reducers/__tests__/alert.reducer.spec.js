import { alert as alertReducer } from "../alert.reducer";
import { alertConstants } from "../../constants/alert.constants";

const initialState = {};

describe("Alert reducer", () => {
  it("should return the initial state", () => {
    expect(alertReducer(undefined, {})).toEqual(initialState);
  });

  it("should handle SHOW alert", () => {
    const successAction = {
      type: alertConstants.SHOW,
      alertType: "success",
      title: "Yipee",
      message: "It works"
    };
    expect(alertReducer({}, successAction)).toEqual({
      type: "success",
      title: "Yipee",
      message: "It works"
    });
  });

  it("should handle alert CLEAR", () => {
    const clearAction = {
      type: alertConstants.CLEAR
    };
    expect(alertReducer({}, clearAction)).toEqual({});
  });
});
