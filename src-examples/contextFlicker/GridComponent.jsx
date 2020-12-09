import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const TestContext = React.createContext('default value');

function TestRenderer(params) {
    const value = React.useContext(TestContext);

    console.log('tr', value);

    return value;
}

function NullValueTestRenderer(params) {
    return params.value;
}

export default function App() {
    const [columnDefs] = React.useState([
        {headerName: "Make", field: "make", cellRenderer: 'nullValueTestRenderer'},
        {headerName: "Custom", field: "custom", cellRenderer: "testRenderer"},
        {headerName: "Model", field: "model"},
        {headerName: "Price", field: "price"}
    ]);

    const [rowData] = React.useState([
        {make: null, model: "Celica", price: 35000},
        {make: "Toyota", model: "Celica", price: 35000},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]);

    return (
        <TestContext.Provider value={"context value"}>
            <div className="ag-theme-alpine" style={{height: '200px', width: '600px'}}>
                <AgGridReact
                    frameworkComponents={{
                        testRenderer: TestRenderer,
                        nullValueTestRenderer: NullValueTestRenderer,
                    }}
                    columnDefs={columnDefs}
                    rowData={rowData}
                    modules={AllModules}
                />
            </div>
        </TestContext.Provider>
    )
}
