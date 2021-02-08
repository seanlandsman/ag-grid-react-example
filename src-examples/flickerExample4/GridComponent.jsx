import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";


export default class GridExample extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            modules: AllModules,
            columnDefs: [
                {
                    headerName: "Make",
                    field: "make",
                    cellRendererFramework: (cell) =>
                        <div>{cell.value}</div>
                },
                {headerName: "Model", field: "model"},
                {headerName: "Price", field: "price"}
            ],
            rowData: this.createRowData(),
            defaultColDef: {resizable: true}
        };
    }

    createRowData() {
        return [
            {make: "Toyota", model: "Celica", price: Math.floor(Math.random() * 1000)},
            {make: "Ford", model: "Mondeo", price: Math.floor(Math.random() * 1000)},
            {make: "Porsche", model: "Boxter", price: Math.floor(Math.random() * 1000)},
        ]
    }

    render() {
        return (
            <div style={{width: "500px", height: "500px"}}>
                <div className="outer-div">
                    <div className="button-bar">
                        <button onClick={() => this.setState({rowData: this.createRowData()})}>
                            Refresh Cells
                        </button>
                    </div>
                    <div className="grid-wrapper">
                        <div
                            id="myGrid"
                            style={{
                                width: "500px", height: "500px"
                            }}
                            className="ag-theme-balham"
                        >
                            <AgGridReact
                                modules={this.state.modules}
                                columnDefs={this.state.columnDefs}
                                defaultColDef={this.state.defaultColDef}
                                immutableData={true}
                                getRowNodeId={data => data.make}
                                rowData={this.state.rowData}
                                onGridReady={({api}) => this.agApi = api}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
