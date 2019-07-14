import React, { Fragment } from "react";
import { Row, Button, Col } from "reactstrap";
import { renderField } from "../../../utils/renderfield";

import { Field } from "redux-form";
import { MdCancel } from "react-icons/md";

const renderServiceFields = ({
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
          Add Service
        </Button>
        {(touched || submitFailed) && error && <span>{error}</span>}
      </Col>
    </Row>

    {fields.map((service, index) => (
      <Row>
        <Col sm="11">
          <div className="form__form-group">
            <div className="form__form-group-field">
              <Field
                name={`${service}.type`}
                type="text"
                placeholder="Service type"
                component={renderField}
                label="Service Type"
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

export default renderServiceFields;
