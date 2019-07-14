import { changeThemeToDark, changeThemeToLight } from "../themeActions";
export const CHANGE_THEME_TO_DARK = "CHANGE_THEME_TO_DARK";
export const CHANGE_THEME_TO_LIGHT = "CHANGE_THEME_TO_LIGHT";

describe(`Sidebar actions`, () => {
  it(`should CHANGE_THEME_TO_DARK`, () => {
    const expectedAction = { type: CHANGE_THEME_TO_DARK };
    expect(changeThemeToDark()).toEqual(expectedAction);
  });
  it(`should CHANGE_THEME_TO_LIGHT`, () => {
    const expectedAction = { type: CHANGE_THEME_TO_LIGHT };
    expect(changeThemeToLight()).toEqual(expectedAction);
  });
});
