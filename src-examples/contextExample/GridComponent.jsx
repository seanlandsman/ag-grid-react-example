'use strict';

import React, {useEffect, useState} from 'react';
import {AgGridReact} from '@ag-grid-community/react';
import {AllModules} from "@ag-grid-enterprise/all-modules";

export default () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [value, setValue] = useState(0);

    const columnDefs = [
        {
            field: 'price',
            valueGetter: (params) => {
                console.log('valueGetter context.value', params.context.value)
                return params.context.value;
            },
        },
    ];

    useEffect(() => {
        if (gridApi) {
            console.log('useEffect', value)
            gridApi.redrawRows();
        }
    }, [value])

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    };

    return (
        <div style={{width: '500px', height: '500px'}}>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                value : {value}
                <button
                    onClick={() => {
                        setValue(value + 1);

                    }}
                >
                    increment value
                </button>
                <AgGridReact
                    context={{value: value}}
                    modules={AllModules}
                    onGridReady={onGridReady}
                    rowData={[{}]}
                    columnDefs={columnDefs}
                ></AgGridReact>
            </div>
        </div>
    );
};

