"use strict";

import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

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
        return <>{this.state.value}</>
    }
}

export default class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Row",
                    field: "row",
                    width: 150
                },
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

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: "200px",
                    width: "600px"
                }}
            >
                Scroll up and down - tests class components with fragments can be created & destroyed
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
    for (var i = 0; i < 1500; i++) {
        rowData.push({
            row: "Row " + i,
            value: i
        });
    }
    return rowData;
}

