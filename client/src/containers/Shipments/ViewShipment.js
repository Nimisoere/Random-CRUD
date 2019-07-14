import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Container, Row } from "reactstrap";
import Shipment from "./components/Shipment";
import { viewShipment } from "./actions/shipments.actions";

const ViewShipment = props => {
  const { dispatch, shipment } = props;

  function fetchShipment() {
    dispatch(viewShipment(props.match.params.id));
  }

  useEffect(() => {
    if (props.match.params.id) {
      dispatch(viewShipment(props.match.params.id));
    }
  }, [dispatch, props.match.params.id]);

  return (
    <Container>
      <Row>
        <Shipment
          shipmentId={props.match.params.id}
          shipment={shipment}
          fetchData={fetchShipment}
        />
      </Row>
    </Container>
  );
};

export default connect(state => ({
  shipment: state.viewShipment
}))(ViewShipment);
