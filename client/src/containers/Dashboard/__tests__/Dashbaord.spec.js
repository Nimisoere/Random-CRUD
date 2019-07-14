import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import DashboardComponent from "../Dashboard";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const enzymeWrapper = shallow(<DashboardComponent />);
  return {
    enzymeWrapper
  };
}

describe("components", () => {
  describe("DashboardComponent", () => {
    it("Match Snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
