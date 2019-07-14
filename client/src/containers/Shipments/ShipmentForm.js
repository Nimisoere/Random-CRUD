import React, { useEffect } from "react";
import { Col, Container, Row } from "reactstrap";
import { connect } from "react-redux";
import { postShipments, viewShipment } from "./actions/shipments.actions";
import HorizontalForm from "./components/ShipmentForm";

const ShipmentForm = ({ dispatch, shipment, match }) => {

  const createFormData = shipment => {
    let shipmentData;
    const hasShipment = match.params.id && shipment && shipment.response;
    const shipmentObj = hasShipment ? shipment.response : null;
    if (shipmentObj) {
      shipmentData = {
        name: shipmentObj.firstName,
        userId: shipmentObj.lastName,
        type: shipmentObj.email,
        mode: shipmentObj.mobileNo,
        origin: shipmentObj.firstName,
        destination: shipmentObj.lastName,
        status: shipmentObj.email,
        total: shipmentObj.mobileNo
      };
    }

    return shipmentData;
  };

  function fetchShipment() {
    dispatch(viewShipment(match.params.id));
  }

  const postShipment = values => {
    dispatch(postShipments(values, match.params.id));
  };

  useEffect(() => {
    if (match.params.id) {
      dispatch(viewShipment(match.params.id));
    }
  }, [dispatch, match.params.id]);

  return (
    <Container>
      <Row>
        <Col md={12}>
          <h3 className="page-title">
            {match.params.id ? "Edit" : "Add"} Shipment
          </h3>
        </Col>
      </Row>
      <Row>
        <HorizontalForm
          shipmentId={match.params.id}
          shipment={shipment}
          initialValues={createFormData(shipment)}
          fetchData={fetchShipment}
          onSubmit={postShipment}
        />
      </Row>
    </Container>
  );
};

export default connect(state => ({
  shipment: state.viewShipment
}))(ShipmentForm);
