import React from "react";
import { Col, Row, Card, CardBody, Spinner, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

const Shipment = props => {
  const { shipment, shipmentId, fetchData } = props;
  const foundShipment = shipment.response && !shipment.loading;
console.log(shipment)
  return (
    <Col>
      <Card>
        <CardBody>
          {foundShipment ? (
            <div className="project-summary">
              <div className="card__title">
                <h4 className="bold-text">
                  {shipment.response.name}: {shipment.response.id}
                  <br />
                  <small>
                    Shipment from {shipment.response.origin} to{" "}
                    {shipment.response.destination}
                  </small>
                </h4>
              </div>
              <Link
                to={`/shipments/edit/${shipmentId}`}
                className="btn btn-sm btn-outline-secondary project-summary__btn"
              >
                Edit
              </Link>

              <Row>
                <Col md={4}>
                  <dl className="row">
                    <dt className="col-sm-3">User ID</dt>
                    <dd className="col-sm-9">
                      <p>{shipment.response.userId}</p>
                    </dd>

                    <dt className="col-sm-3">Mode</dt>
                    <dd className="col-sm-9">
                      <p>{shipment.response.mode}</p>
                    </dd>

                    <dt className="col-sm-3">Type</dt>
                    <dd className="col-sm-9">
                      <p>{shipment.response.type}</p>
                    </dd>

                    <dt className="col-sm-3">Status</dt>
                    <dd className="col-sm-9">
                      <p>{shipment.response.status}</p>
                    </dd>

                    <dt className="col-sm-3">Total</dt>
                    <dd className="col-sm-9">
                      <p>{shipment.response.total}</p>
                    </dd>
                  </dl>
                </Col>
                <Col md={8}>
                  <dl className="row">
                    <dt className="col-sm-2">Cargo</dt>
                    <dd className="col-sm-10">
                      {shipment.response.cargo &&
                      shipment.response.cargo.length ? (
                        shipment.response.cargo.map((cargo, index) => (
                          <dl className="row" key={index}>
                            <dt className="col-sm-2">Type</dt>
                            <dd className="col-sm-10">
                              <p>{cargo.type}</p>
                            </dd>
                            <dt className="col-sm-2">Description</dt>
                            <dd className="col-sm-10">
                              <p>{cargo.description}</p>
                            </dd>
                            <dt className="col-sm-2">Volume</dt>
                            <dd className="col-sm-10">
                              <p>{cargo.volume}</p>
                            </dd>
                          </dl>
                        ))
                      ) : (
                        <p className="text-muted">-- No cargo found --</p>
                      )}
                    </dd>
                    <dt className="col-sm-2">Services</dt>
                    <dd className="col-sm-10">
                      {shipment.response.services &&
                      shipment.response.services.length ? (
                        shipment.response.services.map((service, index) => (
                          <dl className="row" key={index}>
                            <dt className="col-sm-2">Type</dt>
                            <dd className="col-sm-10">
                              <p>{service.type}</p>
                            </dd>
                          </dl>
                        ))
                      ) : (
                        <p className="text-muted">-- No service found --</p>
                      )}
                    </dd>
                  </dl>
                </Col>
              </Row>
            </div>
          ) : (
            <div className="text-center">
              {shipment && shipment.loading ? (
                <div>
                  <Spinner
                    color="success"
                    className="my-4"
                    style={{ width: "6rem", height: "6rem" }}
                  />
                  <h4 className="text-secondary">
                    Fetching Shipment with ID: ({shipmentId})
                  </h4>
                </div>
              ) : (
                <div>
                  <h4 className="text-danger">
                    {shipment.error
                      ? `Something went wrong. Could not fetch shipment with ID: (${shipmentId})`
                      : `Shipment with ID (${shipmentId}) not found`}
                  </h4>
                  <Button color="primary" outline size="sm" onClick={fetchData}>
                    Try Again
                  </Button>
                </div>
              )}
            </div>
          )}
          {shipment && !shipment.loading ? (
            <h5 className="bold-text mt-4">
              <Link to="/shipments">
                <MdArrowBack size={20} /> Back to shipments
              </Link>
            </h5>
          ) : null}
        </CardBody>
      </Card>
    </Col>
  );
};

export default Shipment;
