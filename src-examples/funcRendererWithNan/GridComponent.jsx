import React from "react";
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
    }
];

export default function App() {
    return (
        <div
            className="ag-theme-balham"
            style={{
                height: "500px",
                width: "600px"
            }}
        >
            Simple functional component (with NaN as a value)
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                frameworkComponents={frameworkComponents}
                modules={AllModules}
            />
        </div>
    );
}
