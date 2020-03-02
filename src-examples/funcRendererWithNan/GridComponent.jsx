import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";

import {AllModules} from "@ag-grid-enterprise/all-modules";

const FigureCellRenderer = ({value}) => value;
const frameworkComponents = {
    figureCellRenderer: FigureCellRenderer
};

const columnDefs = [
    {
        headerName: "Price",
        field: "price",
        cellRenderer: "figureCellRenderer"
    }
];

const rowData = [
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    },
    {
        price: NaN
    },
    {
        price: 10
    }
];


/*
const rowData = [
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    },
    {
        price: 20
    },
    {
        price: 10
    }
];
*/

export default class GridExample extends Component {
    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    render() {
        return (
            <div
                className="ag-theme-balham"
                style={{
                    height: "500px",
                    width: "600px"
                }}
            >
                Simple functional component (with NaN as a value)
                <button onClick={() => this.gridApi.refreshCells({force: true})}>
                    Refresh Cells
                </button>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    frameworkComponents={frameworkComponents}
                    modules={AllModules}
                    onGridReady={this.onGridReady}
                />
            </div>
        )
    }
}
