"use strict";

import React, {Component} from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";


class FilterComponent extends Component {
    isFilterActive = () => true;

    doesFilterPass = () => true;

    getModel = () => ({value: 'some value'});

    setModel = () => {
    };

    render = () => {
        return <div>Custom filter</div>;
    };
}

class FloatingFilterComponent extends Component {
    render = () => {
        const model = this.props.currentParentModel();
        this.props.parentFilterInstance(i => {
            console.log('Parent filter instance', i);
        });
        return <input type="text" name="name"/>;
    };
}

const GRID_PROPS = {
    columnDefs: [
        {field: 'field'},
        {
            field: 'value',
            editable: true,
            // filter: 'filterComponent',
            floatingFilterComponent: 'floatingFilterComponent',
        },
    ],
    defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
    },
    frameworkComponents: {
        filterComponent: FilterComponent,
        floatingFilterComponent: FloatingFilterComponent,
    },
    floatingFilter: true,
};

function initRowData() {
    const rowData = {};
    for (let i = 0; i < 3; i++) {
        rowData[i] = {id: i, field: 'abcd', value: 1234};
    }
    return rowData;
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rowData: initRowData(),
        };
    }

    render() {
        const rowData = Object.values(this.state.rowData);
        return (
            <div style={{width: '500px', height: '500px'}}>
                <div
                    id="myGrid"
                    style={{
                        height: '100%',
                        width: '100%',
                    }}
                    className="ag-theme-balham"
                >
                    <AgGridReact
                        {...GRID_PROPS}
                        rowData={rowData}
                        onGridReady={params => (this.gridApi = params.api)}
                        modules={AllModules}
                        deltaRowDataMode
                        getRowNodeId={data => data.id}
                        reactNext={true}
                    />
                </div>
            </div>
        );
    }
}
