import {
  CHANGE_SIDEBAR_VISIBILITY,
  CHANGE_MOBILE_SIDEBAR_VISIBILITY
} from "../../actions/sidebarActions";
import sidebarReducer from "../sidebarReducer";

const initialState = {
  collapse: false,
  show: false
};

describe("Sidebar Reducer", () => {
  it("should return the initial state", () => {
    expect(sidebarReducer(initialState, {})).toEqual(initialState);
  });

  it("should handle CHANGE_SIDEBAR_VISIBILITY", () => {
    const changeAction = {
      type: CHANGE_SIDEBAR_VISIBILITY
    };
    expect(sidebarReducer(initialState, changeAction)).toEqual({
      ...initialState,
      collapse: !initialState.collapse
    });
  });

  it("should handle CHANGE_MOBILE_SIDEBAR_VISIBILITY", () => {
    const changeAction = {
      type: CHANGE_MOBILE_SIDEBAR_VISIBILITY
    };
    expect(sidebarReducer(initialState, changeAction)).toEqual({
      ...initialState,
      show: !initialState.show
    });
  });
});
