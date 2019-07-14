import React, { memo, useEffect } from "react";
import {
  Card,
  CardBody,
  Row,
  Col,
  Button,
  ButtonToolbar,
  Spinner
} from "reactstrap";
import { Field, FieldArray, reduxForm } from "redux-form";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { MdArrowBack } from "react-icons/md";
import { Link } from "react-router-dom";
import { renderField } from "../../../utils/renderfield";
import validate from "./validate";

import { resetPostShipment } from "../actions/shipments.actions";
import renderServiceFields from "./renderServicesFields";
import renderCargoFields from "./renderCargoFields";

const ShipmentForm = memo(
  ({
    dispatch,
    handleSubmit,
    reset,
    pristine,
    invalid,
    submitting,
    shipmentId,
    shipment,
    postShipments
  }) => {
    const foundShipment = shipment && shipment.response && !shipment.loading;

    const resetForm = () => {
      reset();
    };

    useEffect(() => {
      dispatch(resetPostShipment());
      return () => {
        dispatch(resetPostShipment());
      };
    }, [dispatch]);

    return (
      <Col md={12} lg={12}>
        <Card>
          <CardBody>
            <div className="card__title">
              <h5 className="bold-text">
                <Link to="/shipments">
                  <MdArrowBack size={20} /> Back to shipments
                </Link>
              </h5>
            </div>
            {shipmentId && shipment && shipment.loading ? (
              <div className="text-center">
                <Spinner
                  color="success"
                  className="my-4"
                  style={{ width: "6rem", height: "6rem" }}
                />
                <h4 className="text-secondary">
                  Fetching shipment with ID: ({shipmentId})
                </h4>
              </div>
            ) : (
              <div>
                {shipmentId && !foundShipment ? (
                  <h4 className="text-danger">
                    {shipment && shipment.error
                      ? `Something went wrong. Could not fetch shipment with ID (${shipmentId})`
                      : `Shipment with ID (${shipmentId}) not found`}
                  </h4>
                ) : (
                  <form className="form" onSubmit={handleSubmit}>
                    <Row>
                      <Col lg="6">
                        <Row>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Shipment Name
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="name"
                                  component={renderField}
                                  type="text"
                                  placeholder="Shipment name"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                User ID
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="userId"
                                  component={renderField}
                                  type="text"
                                  placeholder="User ID"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                        <Row>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Origin
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="origin"
                                  component={renderField}
                                  type="text"
                                  placeholder="Origin"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Destination
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="destination"
                                  component={renderField}
                                  type="text"
                                  placeholder="Destination"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Mode
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="mode"
                                  component={renderField}
                                  type="text"
                                  placeholder="Mode"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Type
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="type"
                                  component={renderField}
                                  type="text"
                                  placeholder="Type"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>

                        <Row>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Status
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="status"
                                  component={renderField}
                                  type="text"
                                  placeholder="Status"
                                />
                              </div>
                            </div>
                          </Col>
                          <Col lg="6">
                            <div className="form__form-group">
                              <span className="form__form-group-label">
                                Total
                              </span>
                              <div className="form__form-group-field">
                                <Field
                                  name="total"
                                  component={renderField}
                                  type="number"
                                  placeholder="Total"
                                />
                              </div>
                            </div>
                          </Col>
                        </Row>
                      </Col>

                      <Col lg="6">
                        <Card className="shadow-sm mb-4">
                          <CardBody>
                            <FieldArray
                              name="cargo"
                              component={renderCargoFields}
                            />
                          </CardBody>
                        </Card>

                        <Card className="shadow-sm">
                          <CardBody>
                            <FieldArray
                              name="services"
                              component={renderServiceFields}
                            />
                          </CardBody>
                        </Card>
                      </Col>
                    </Row>

                    <ButtonToolbar className="form__button-toolbar">
                      <Button
                        type="button"
                        onClick={resetForm}
                        disabled={pristine || submitting}
                      >
                        Cancel
                      </Button>
                      <Button
                        color="primary"
                        type="submit"
                        disabled={submitting || invalid}
                      >
                        {postShipments && postShipments.loading ? (
                          <span>
                            <Spinner size="sm" color="default" />{" "}
                          </span>
                        ) : null}
                        Submit
                      </Button>
                    </ButtonToolbar>
                  </form>
                )}
              </div>
            )}
          </CardBody>
        </Card>
      </Col>
    );
  }
);

ShipmentForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired
};

export default reduxForm({
  form: "shipment_form",
  validate,
  enableReinitialize: true
})(
  connect(state => ({
    postShipments: state.postShipments
  }))(ShipmentForm)
);
