import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import ShipmentForm from "../ShipmentForm";

Enzyme.configure({ adapter: new Adapter() });

function setup() {
  const props = {
    dispatch: jest.fn(),
    handleSubmit: jest.fn(),
    reset: jest.fn(),
    pristine: false,
    invalid: true,
    submitting: false,
    shipmentId: 44,
    shipment: {},
    postShipments: jest.fn()
  };
  const enzymeWrapper = shallow(<ShipmentForm {...props} />);
  return {
    props,
    enzymeWrapper
  };
}

describe("components", () => {
  describe("ShipmentForm", () => {
    it("To match snapshot", () => {
      const { enzymeWrapper } = setup();
      expect(enzymeWrapper).toMatchSnapshot();
    });
  });
});
