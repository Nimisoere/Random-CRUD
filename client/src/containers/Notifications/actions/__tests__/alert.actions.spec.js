import { show, clear } from "../alert.actions";
import { alertConstants } from "../../constants/alert.constants";
const section = "Run this test";

describe(`Alert actions`, () => {
  it(`should display an alert`, () => {
    const alertType = "success";
    const title = "Yipee";
    const message = "It works";
    const expectedAction = {
      type: alertConstants.SHOW,
      alertType,
      title,
      message
    };
    expect(show(alertType, title, message)).toEqual(expectedAction);
  });

  it(`should clear alert`, () => {
    const expectedAction = { type: alertConstants.CLEAR };
    expect(clear()).toEqual(expectedAction);
  });
});
