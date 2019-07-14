import {
    CHANGE_THEME_TO_DARK,
    CHANGE_THEME_TO_LIGHT
  } from "../../actions/themeActions";
  import themeReducer from "../themeReducer";
  
  const initialState = {
    className: "theme-light"

  };
  
  describe("The,e Reducer", () => {
    it("should return the initial state", () => {
      expect(themeReducer(initialState, {})).toEqual(initialState);
    });
  
    it("should handle CHANGE_THEME_TO_DARK", () => {
      const changeAction = {
        type: CHANGE_THEME_TO_DARK
      };
      expect(themeReducer(initialState, changeAction)).toEqual({
        className: "theme-dark"
      });
    });
  
    it("should handle CHANGE_MOBILE_SIDEBAR_VISIBILITY", () => {
      const changeAction = {
        type: CHANGE_THEME_TO_LIGHT
      };
      expect(themeReducer(initialState, changeAction)).toEqual({
        ...initialState,
        className: "theme-light"
      });
    });
  });
  