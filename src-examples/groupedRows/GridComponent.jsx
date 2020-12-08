"use strict";

import React, {Component} from 'react';
import {AgGridReact} from '@ag-grid-community/react';
import {AllModules} from "@ag-grid-enterprise/all-modules";
import '@ag-grid-enterprise/all-modules/dist/styles/ag-grid.css';
import '@ag-grid-enterprise/all-modules/dist/styles/ag-theme-alpine.css';

export default class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Group Renderer C",
                    showRowGroup: true,
                    cellRenderer: "agGroupCellRenderer",
                    field: "city",
                    cellRendererParams: {
                        suppressCount: true,
                        checkbox: true,
                        innerRendererFramework: Renderer,
                        suppressDoubleClickExpand: true,
                        suppressEnterExpand: true
                    }
                },
                {
                    headerName: "Type",
                    field: "type",
                    rowGroup: "false",
                    cellRendererFramework: Renderer
                }
            ],
            defaultColDef: {resizable: true},
            groupDefaultExpanded: 1,
            rowSelection: "multiple",
            rowData: createRowData()
        };
    }

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    render() {
        return (
            <div style={{width: "100%", height: "100%"}}>
                <div
                    id="myGrid"
                    style={{
                        height: "700px",
                        width: "500px"
                    }}
                    className="ag-theme-alpine"
                >
                    <button onClick={() => this.gridApi.refreshCells({force: true})}>
                        Refresh Cells
                    </button>
                    <AgGridReact
                        columnDefs={this.state.columnDefs}
                        components={this.state.components}
                        defaultColDef={this.state.defaultColDef}
                        groupSuppressAutoColumn={true}
                        suppressRowClickSelection={true}
                        groupDefaultExpanded={this.state.groupDefaultExpanded}
                        rowSelection={this.state.rowSelection}
                        groupSelectsChildren={true}
                        animateRows={true}
                        rowData={this.state.rowData}
                        modules={AllModules}
                        onGridReady={this.onGridReady}
                    />
                </div>
            </div>
        );
    }
}

class Renderer extends Component {
    refresh(params) {
        return true;
    }

    render() {
        return (
            <div>{this.props.value}</div>
        );
    }
};

function createRowData() {
    var rowData = [];
    var irelandCities = ["Dublin", "Galway", "Cork"];
    var ukCities = ["London", "Bristol", "Manchester", "Liverpool"];
    var usaCities = ["New York", "Boston", "L.A.", "San Fransisco", "Detroit"];
    var middleEarthCities = ["The Shire", "Rohan", "Rivendell", "Mordor"];
    var midkemiaCities = ["Darkmoor", "Crydee", "Elvandar", "LaMut", "Ylith"];
    var addCity = function (country, type, city) {
        rowData.push({
            country: country,
            type: type,
            city: city
        });
    };
    irelandCities.forEach(addCity.bind(null, "Ireland", "Non Fiction"));
    ukCities.forEach(addCity.bind(null, "United Kingdom", "Non Fiction"));
    usaCities.forEach(addCity.bind(null, "USA Cities", "Non Fiction"));
    middleEarthCities.forEach(addCity.bind(null, "Middle Earth", "Fiction"));
    midkemiaCities.forEach(addCity.bind(null, "Midkemia", "Fiction"));
    return rowData;
}

