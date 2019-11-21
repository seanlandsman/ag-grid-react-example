"use strict";

import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const NUMBER_OF_ROWS = 200;

class CubeRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.valueCubed()
        };
    }

    valueCubed() {
        return this.props.value * this.props.value * this.props.value;
    }

    render() {
        return this.state.value
    }
}

export default class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Cube",
                    field: "value",
                    cellRenderer: "cubeRenderer",
                    colId: "cube",
                    width: 150
                }
            ],
            rowData: createRowData(),
            frameworkComponents: {
                cubeRenderer: CubeRenderer
            }
        };
    }

    onGridReady = (params) => {
        this.api = params.api;
    };

    scrollToBottom = () => {
        this.api.ensureIndexVisible(100, 'top');
    };

    scrollToTop = () => {
        this.api.ensureIndexVisible(0, 'top');
    };

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: "200px",
                    width: "600px"
                }}
            >
                Scroll up and down - tests class components can be created & destroyed
                <button id="scrollToBottom" onClick={this.scrollToBottom}>Scroll to Bottom</button>
                <button id="scrollToTop" onClick={this.scrollToTop}>Scroll to Top</button>
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                    modules={AllModules}
                    frameworkComponents={this.state.frameworkComponents}
                    onGridReady={this.onGridReady}
                />
            </div>
        );
    }
}

function createRowData() {
    var rowData = [];
    for (var i = 0; i < NUMBER_OF_ROWS; i++) {
        rowData.push({
            row: "Row " + i,
            value: i
        });
    }
    return rowData;
}

