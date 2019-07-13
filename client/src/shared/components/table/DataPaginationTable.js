/* eslint-disable consistent-return */
import React, { memo, Fragment } from "react";
import ReactDataGrid from "react-data-grid";
import PropTypes from "prop-types";
import { UncontrolledTooltip } from "reactstrap";
import { Spinner } from "reactstrap";

const DataPaginationTable = memo(props => {
  const { heads, rows, actions, onGridSort, dataState } = props;
  const EmptyRowsView = () => {
    const message = "No data to show";
    return (
      <div
        style={{
          textAlign: "center",
          backgroundColor: "#eee",
          padding: "100px"
        }}
      >
        {dataState.loading ? <Spinner color="success" /> : null}
        <h3>{message}</h3>
      </div>
    );
  };

  const rowGetter = i => {
    const { rows } = props;
    return rows[i];
  };

  const actionFormatter = value => {
    const { row } = value;
    return (
      <Fragment>
        {props.actions.map(action => (
          <Fragment key={action.name}>
            <span
              id={action.name}
              onClick={() => action.btnAction(row)}
              className={`mx-2 pointer text-${action.btnClass}`}
            >
              {action.btnIcon({
                size: 22
              })}
            </span>
            <UncontrolledTooltip placement="bottom" target={action.name}>
              {action.btnText}
            </UncontrolledTooltip>
          </Fragment>
        ))}
      </Fragment>
    );
  };

  const getHeads = () => {
    let columns = heads;
    if (actions) {
      columns = [
        ...columns,
        {
          key: "actions",
          name: "Actions",
          sortable: false,
          formatter: actionFormatter
        }
      ];
    }
    return columns;
  };

  return (
    <div className="table">
      <ReactDataGrid
        onGridSort={onGridSort}
        columns={getHeads()}
        rowGetter={rowGetter}
        rowsCount={rows.length}
        rowHeight={44}
        minColumnWidth={100}
        emptyRowsView={EmptyRowsView}
      />
    </div>
  );
});

DataPaginationTable.propTypes = {
  heads: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string,
      name: PropTypes.string,
      editable: PropTypes.bool,
      sortable: PropTypes.bool
    })
  ).isRequired,
  rows: PropTypes.arrayOf(PropTypes.shape()).isRequired
};

export default DataPaginationTable;
