"use strict";

import React, { Component } from "react";
import { render } from "react-dom";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import { AgGridReact } from "@ag-grid-community/react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css";
import "@ag-grid-enterprise/all-modules/dist/styles/ag-theme-balham.css";
import NameGetterRenderer from "./nameGetterRenderer.jsx";
import SizeRenderer from "./sizeRenderer.jsx";
import { actions } from "./immutableStore.jsx";


class GenericGrid extends Component {
  constructor(props) { 
    super(props);

    this.state = {
      modules: AllModules,
    };
  }
  
  onGridReady = params => {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
    params.api.sizeColumnsToFit();
  };
  
  getColumnDefs = () => ([
    {
      headerName: "nameGetter1",
      cellRendererFramework: NameGetterRenderer,
      valueGetter: params => ({
        name: params.data.get('name'),
        id: params.data.get('id'),
      }),
      equals: (oldParams, newParams) => {
        return oldParams.name === newParams.name;
      },
      valueSetter: params => {
        this.props.updateName(params.newValue);
        return true;
      },
      width: 150
    },
    {
      headerName: "nameGetter2",
      cellRendererFramework: NameGetterRenderer,
      valueGetter: params => ({
        name: params.data.get('name'),
        id: params.data.get('id'),
      }),
      equals: (oldParams, newParams) => {
        return oldParams.name === newParams.name;
      },
      valueSetter: params => {
        this.props.updateName(params.newValue);
        return true;
      },
      width: 150
    },    
        {
      headerName: "SizeRenderer",
      cellRendererFramework: SizeRenderer,
      valueGetter: params => ({
        size: params.data.get('size'),
        id: params.data.get('id'),
      }),
      equals: (oldParams, newParams) => {
        return oldParams.size === newParams.size;
      },
      valueSetter: params => {
        this.props.updateSize(params.newValue);
        return true;
      },
      width: 150
    },
  ]);

  render() {
    return (
      <div style={{ width: "100%", height: "500px" }}>
        <div style={{ height: "calc(100% - 55px)" }}>
          <div
            id="myGrid"
            style={{
              height: "100%",
              width: "100%"
            }}
            className="ag-theme-balham"
          >
            <AgGridReact
              modules={this.state.modules}
              columnDefs={this.getColumnDefs()}
              rowData={this.props.tableData}
              onGridReady={this.onGridReady}
              deltaRowDataMode={true}
              getRowNodeId={data => data.get('id')}
            />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tableData: state.immutableStore.get('entities')
});

const mapDispatchToProps = dispatch => ({
  updateName: ({ name, id }) => dispatch(actions.updateName({ name, id })),
  updateSize: ({ size, id }) => dispatch(actions.updateSize({ size, id }))
});

export default connect(mapStateToProps, mapDispatchToProps)(GenericGrid);


