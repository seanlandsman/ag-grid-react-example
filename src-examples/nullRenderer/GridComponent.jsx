import React from "react";
import {AgGridReact} from "@ag-grid-community/react";

import {AllModules} from "@ag-grid-enterprise/all-modules";

function NullRenderer({ data }) {
    return (
        data.value
    );
}

const frameworkComponents = {
    nullRenderer: NullRenderer
};

const columnDefs = [
    {
        headerName: "Price",
        field: "price",
        cellRenderer: "nullRenderer"
    }
];
const rowData = [
    {
        value: null
    },
    {
        value: 'dsafsd'
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
             Functional Renderer
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                frameworkComponents={frameworkComponents}
                modules={AllModules}
            />
        </div>
    );
}
