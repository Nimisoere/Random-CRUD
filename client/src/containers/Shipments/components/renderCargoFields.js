import React, { Fragment } from "react";
import { Row, Button, Col } from "reactstrap";
import { renderField } from "../../../utils/renderfield";

import { Field } from "redux-form";
import { MdCancel } from "react-icons/md";

const renderCargoFields = ({
  fields,
  meta: { touched, error, submitFailed }
}) => (
  <Fragment>
    <Row>
      <Col lg="12" className="text-right">
        <Button
          size="sm"
          type="button"
          outline
          color="primary"
          onClick={() => fields.push({})}
        >
          Add Cargo
        </Button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </Col>
    </Row>

    {fields.map((cargo, index) => (
      <Row>
        <Col sm="3">
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
                name={`${cargo}.type`}
                type="text"
                placeholder="Cargo type"
                component={renderField}
                label="Cargo Type"
              />
            </div>
          </div>
        </Col>
        <Col sm="5">
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
                name={`${cargo}.description`}
                type="text"
                placeholder="Cargo description"
                component={renderField}
                label="Cargo description"
              />
            </div>
          </div>
        </Col>
        <Col sm="3">
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
                name={`${cargo}.volume`}
                type="number"
                placeholder="Volume"
                component={renderField}
                label="Volumee"
              />
            </div>
          </div>
        </Col>
        <Col sm="1">
          <MdCancel className="pointer" onClick={() => fields.remove(index)} size="20" />
        </Col>
      </Row>
    ))}
  </Fragment>
);

export default renderCargoFields;
