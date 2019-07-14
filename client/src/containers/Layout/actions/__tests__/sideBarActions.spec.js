import { changeSidebarVisibility, changeMobileSidebarVisibility } from "../sidebarActions";
export const CHANGE_SIDEBAR_VISIBILITY = "CHANGE_SIDEBAR_VISIBILITY";
export const CHANGE_MOBILE_SIDEBAR_VISIBILITY =
  "CHANGE_MOBILE_SIDEBAR_VISIBILITY";

describe(`Sidebar actions`, () => {
  it(`should CHANGE_SIDEBAR_VISIBILITY`, () => {
    const expectedAction = { type: CHANGE_SIDEBAR_VISIBILITY };
    expect(changeSidebarVisibility()).toEqual(expectedAction);
  });
  it(`should CHANGE_MOBILE_SIDEBAR_VISIBILITY`, () => {
    const expectedAction = { type: CHANGE_MOBILE_SIDEBAR_VISIBILITY };
    expect(changeMobileSidebarVisibility()).toEqual(expectedAction);
  });
});
