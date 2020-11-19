import React, {memo} from "react";
import {AgGridReact} from "@ag-grid-community/react";

import {AllModules} from "@ag-grid-enterprise/all-modules";

const BooleanRenderer = memo(({data}) => (<> {data.value ? 'TRUE' : 'FALSE'} </>));

const frameworkComponents = {
    booleanRenderer: BooleanRenderer
};

const columnDefs = [
    {
        headerName: "Price",
        field: "price",
        cellRenderer: "booleanRenderer"
    }
];
const rowData = [
    {
        value: null
    },
    {
        value: true
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
            Memoized Functional Renderer
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                frameworkComponents={frameworkComponents}
                modules={AllModules}
            />
        </div>
    );
}
