import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {ClientSideRowModelModule} from "@ag-grid-enterprise/all-modules";

class CRF extends React.Component {
    render() {
        return <>Hello thank you for your time to look at this problem</>;
    }
}

export default (props) => {
    const columns = [
        // {
        //     headerName: "A",
        //     field: "a",
        //     resizable: true
        // },
        {
            headerName: "B",
            field: "b",
            cellRenderer: 'crf',
            cellStyle: {"white-space": "normal"},
            autoHeight: true
        }
    ];

    return (
        <div
            className="ag-theme-alpine"
            style={{
                height: "80vh",
                width: "500px"
            }}
        >
            <AgGridReact
                columnDefs={columns}
                modules={[ClientSideRowModelModule]}
                frameworkComponents={{
                    crf: CRF
                }}
                rowData={[
                    {a: "Toyota", b: "Celica"},
                    // {a: "Ford", b: "Mondeo"},
                    // {a: "Porsche", b: "Boxter"}
                ]}
            />
        </div>
    );
};

