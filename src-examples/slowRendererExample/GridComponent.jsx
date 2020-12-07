import React, {useState} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const SHOW_CONSOLE = true;
const SLOW_MOTION_DELAY_MS = 10;

const delay = ms => {
    const now = Date.now();
    const waitUntil = now + ms;
    while (true) {
        if (Date.now() >= waitUntil) break;
    }
};

const rowData = [];
for (var i = 0; i < 25; i++) {
    rowData.push({
        id: i,
        a: `A${i}`,
        b: `B${i}`
    });
}

const gridOptions = {
    columnDefs: [
        {
            field: "a",
            headerName: "Column A",
            cellRendererFramework: ({value}) => {
                delay(SLOW_MOTION_DELAY_MS);
                return <span style={{fontWeight: "bold"}}>{value}</span>;
            }
        },
        {
            field: "b",
            headerName: "Column B"
        }
    ]
};

const EMPTY_ARRAY = [];

export default () => {
    const [showAll, setShowAll] = useState(true);

    const rows = showAll ? rowData : EMPTY_ARRAY;

    return (
        <div style={{height: "500px", width: "100px"}}>
            <div>
                <button type="button" onClick={() => setShowAll(val => !val)}>
                    Toggle
                </button>
            </div>
            <div style={{height: "100%"}} className="ag-theme-balham">
                <AgGridReact
                    gridOptions={gridOptions}
                    rowData={rows}
                    modules={AllModules}
                    // deltaRowDataMode
                    // getRowNodeId={row => row.id}
                />
            </div>
        </div>
    );
};
