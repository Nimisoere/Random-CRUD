import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Shipment from "../Shipment";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    shipment: {},
    shipmentId: 44,
    fetchData: jest.fn()
  };
  const enzymeWrapper = shallow(<Shipment {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("Shipment", () => {
    it("To match snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
