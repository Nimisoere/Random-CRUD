/* eslint-disable react/no-unused-state,react/no-unescaped-entities */
import React, { useEffect } from "react";
import { Card, CardBody, Col, ButtonToolbar } from "reactstrap";
import { Link } from "react-router-dom";
import { MdModeEdit, MdPageview, MdDelete } from "react-icons/md";
import DataTable from "../../shared/components/DataTable";
import { withRouter } from "react-router";
import "react-confirm-alert/src/react-confirm-alert.css";

import { connect } from "react-redux";
import { getShipments, deleteShipment } from "./actions/shipments.actions";

const ViewShipments = ({ dispatch, shipments, history, location }) => {
  function fetchShipments() {
    dispatch(getShipments());
  }

  useEffect(() => {
    dispatch(getShipments());
  }, [dispatch]);

  const count = shipments && shipments.response ? shipments.response.length : 0;

  const columns = [
    {
      accessor: "id",
      name: "Shipment Id",
      filterable: true
    },
    {
      accessor: "userId",
      name: "User ID",
      sortable: true
    },
    {
      accessor: "name",
      name: "Name",
      sortable: true
    },
    {
      accessor: "mode",
      name: "Mode",
      sortable: true
    },
    {
      accessor: "type",
      name: "Type",
      sortable: true
    },
    {
      accessor: "origin",
      name: "Origin",
      sortable: true
    },
    {
      accessor: "destination",
      name: "Destination",
      sortable: true
    },
    {
      accessor: "status",
      name: "Status",
      sortable: true
    },
    {
      accessor: "total",
      name: "Total",
      sortable: true
    }
  ];

  const handleAction = (row, action) => {
    if (action.name === "view") {
      history.push(`${location.pathname}/view/${row.id}`);
    } else if (action.name === "edit") {
      history.push(`${location.pathname}/edit/${row.id}`);
    }
  };

  const deleteRow = row => {
    dispatch(deleteShipment(row.id));
  };

  const actions = [
    {
      name: "edit",
      btnText: "Edit",
      btnAction: handleAction,
      btnClass: "default",
      btnIcon: MdModeEdit
    },
    {
      name: "view",
      btnText: "View Details",
      btnAction: handleAction,
      btnClass: "success",
      btnIcon: MdPageview
    },
    {
      name: "delete",
      btnText: "Delete",
      btnAction: deleteRow,
      btnClass: "danger",
      btnIcon: MdDelete
    }
  ];

  return (
    <Col md={12} lg={12}>
      <Card>
        <CardBody>
          <div className="card__title">
            <h4>Shipments List</h4>
            <ButtonToolbar className="products-list__btn-toolbar-top">
              <Link
                className="btn btn-primary products-list__btn-add"
                to="/shipments/new"
              >
                Create new shipment
              </Link>
            </ButtonToolbar>
          </div>
          <DataTable
            columns={columns}
            loading={shipments && shipments.loading}
            data={
              shipments && shipments.response && shipments.response.length
                ? shipments.response
                : []
            }
            count={count}
            countName="shipments"
            defaultPageSize={20}
            defaultPageNumber={1}
            loadData={fetchShipments}
            error={shipments && shipments.error}
            bordered={true}
            striped={true}
            hover={true}
            actions={actions}
            responsive
          />
        </CardBody>
      </Card>
    </Col>
  );
};

export default connect(state => ({
  shipments: state.shipments
}))(withRouter(ViewShipments));
