import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {Button} from "@material-ui/core";
import {AllModules} from "@ag-grid-enterprise/all-modules";

export default function GridComponent(props) {
    const columns = [
        {
            headerName: "A",
            field: "a",
            resizable: true
        },
        {
            headerName: "B",
            field: "b",
            cellRendererFramework: params => {
                return (
                    <>
                        <Button variant="contained" color="primary">
                            Button not correct
                        </Button>
                    </>
                );
            }
        }
    ];

    return (
        <div>
            <h2>Styling bug</h2>
            <Button variant="contained" color="primary">
                Button correct
            </Button>
            <div
                className="ag-theme-balham"
                style={{
                    height: "500px",
                    width: "700px"
                }}
            >
                <AgGridReact
                    rowHeight={50}
                    modules={AllModules}
                    columnDefs={columns}
                    rowData={[
                        {a: "Toyota", b: "Celica"},
                        {a: "Ford", b: "Mondeo"},
                        {a: "Porsche", b: "Boxter"}
                    ]}
                />
            </div>
        </div>
    );
};

