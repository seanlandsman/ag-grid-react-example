"use strict";


import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const Child = () => {
    return (
        <span style={{backgroundColor: 'green'}}>
            Child Text Here
            And Here
        </span>
    )
};

const Parent = (props) => {
    return (
        <div style={{backgroundColor: 'blue', display: 'inline-block'}}>
            Some Text Here {props.value}
            <Child/>
            Some More Text Here {props.value}
        </div>
    )
};

export default class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                {
                    headerName: "Cube",
                    field: "value",
                    cellRenderer: "parentRenderer",
                    colId: "cube",
                    width: 350
                }
            ],
            rowData: createRowData(),
            frameworkComponents: {
                parentRenderer: Parent,
                childRenderer: Child
            }
        };
    }

    render() {
        return (
            <>
            <button onClick={() => this.agApi.refreshCells({force: true})}>
                Refresh Cells
            </button>
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
                    onGridReady={({api}) => this.agApi = api}
                />
            </div>
                </>
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

