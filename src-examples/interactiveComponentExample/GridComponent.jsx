"use strict";

import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

class InputOutputRenderer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    render() {
        return <>
            <input type="text" value={this.state.value} onChange={this.handleChange}/> - {this.state.value}
        </>
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
                    cellRenderer: "inputOutputRenderer",
                    colId: "cube",
                    width: 250
                }
            ],
            rowData: createRowData(),
            frameworkComponents: {
                inputOutputRenderer: InputOutputRenderer
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
    for (var i = 0; i < 1; i++) {
        rowData.push({
            row: "Row " + i,
            value: i
        });
    }
    return rowData;
}

