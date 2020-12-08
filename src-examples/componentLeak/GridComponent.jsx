import React, {Component} from "react";

import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

class ParamsRenderer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: props.value,
        };
    }

    render() {
        return <span>$ {this.state.value}</span>;
    }

    refresh(params) {
        console.log("refresh");
        if (params.value !== this.state.value) {
            this.setState({
                value: params.value,
            });
        }
        return true;
    }
}

export default class GridExample extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [
                // {
                //     field: 'id',
                //     width: 150,
                // },
                {
                    field: 'price',
                    width: 150,
                    sort: 'desc',
                },
                {
                    headerName: 'CELL RENDERER 1',
                    field: 'price',
                    cellRendererFramework: ParamsRenderer,
                    colId: 'cell1',
                    width: 200,
                },
                // {
                //     headerName: 'CELL RENDERER 2',
                //     field: 'price',
                //     cellRendererFramework: ParamsRenderer,
                //     colId: 'cell2',
                //     width: 200,
                // },
                // {
                //     headerName: 'CELL RENDERER 3',
                //     field: 'price',
                //     cellRendererFramework: ParamsRenderer,
                //     colId: 'cell3',
                //     width: 200,
                // },
                // {
                //     headerName: 'CELL RENDERER 4',
                //     field: 'price',
                //     cellRendererFramework: ParamsRenderer,
                //     colId: 'cell4',
                //     width: 200,
                // },
            ],
            rowData: [],
            defaultColDef: {
                editable: true,
                sortable: true,
                filter: true,
            },
        };
    }

    timerId;
    nextRowId = 0;

    onGridReady = params => {
        this.gridApi = params.api;
        this.gridColumnApi = params.columnApi;
    };

    onButtonStart = () => {
        this.timerId = setInterval(() => {
            let newRowData = [...this.state.rowData];

            const id = this.nextRowId++ % 3;
            const newRowUpdate = {
                id,
                price: Math.random() * 1000,
            };
            newRowData[id] = newRowUpdate;
            this.setState({ rowData: newRowData });
        }, 100);
    };

    onButtonStop() {
        clearInterval(this.timerId);
    }

    getRowNodeId = row => {
        return row.id;
    }

    render() {
        return (
            <div style={{ width: '500px', height: '140px' }}>
                <button onClick={() => this.onButtonStart()}> start </button>
                <button onClick={() => this.onButtonStop()}> stop </button>
                <div style={{ height: 'calc(100% - 55px)' }}>
                    <div
                        id="myGrid"
                        style={{
                            height: '100%',
                            width: '100%',
                        }}
                        className="ag-theme-alpine"
                    >
                        <AgGridReact
                            columnDefs={this.state.columnDefs}
                            rowData={this.state.rowData}
                            context={this.state.context}
                            frameworkComponents={this.state.frameworkComponents}
                            defaultColDef={this.state.defaultColDef}
                            suppressAnimationFrame={true}
                            modules={AllModules}
                            rowBuffer={1}
                            onGridReady={this.onGridReady}
                            immutableData={true}
                            getRowNodeId={this.getRowNodeId}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
