import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { MainWrapper } from "../MainWrapper";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    theme: { className: "theme-light" },
    children: React.createElement("div")
  };
  const enzymeWrapper = shallow(<MainWrapper {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("MainWrapper", () => {
    it("Match Snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
