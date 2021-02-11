import React, {useEffect, useReducer, useState} from 'react';
import {AgGridColumn, AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import produce from 'immer';

const testReducer = (state, action) =>
    produce(state, (draftState) => {
        switch (action.type) {
            case 'new':
                draftState.instruments[action.instrument.instrument_name] =
                    action.instrument;
                break;
            case 'remove':
                delete draftState.instruments[action.instrument.instrument_name];
                break;
        }
    });

const testReducer2 = (state, action) => {
    const updatedInstruments = {...state.instruments};
    switch (action.type) {
        case 'new':
            updatedInstruments[action.instrument.instrument_name] = action.instrument;
            break;
        case 'remove':
            delete updatedInstruments[action.instrument.instrument_name];
            break;
    }
    return {...state, instruments: updatedInstruments};
};

export default () => {
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const [rowData, setRowData] = useState(null);

    // <PROBLEMS>
    // change 'testReducer' (immer) to 'testReducer2' (no immer) to make it work
    const [testStore, testDispatch] = useReducer(testReducer, {
        instruments: {},
    });

    useEffect(() => {
        setTimeout(() => {
            testDispatch({
                type: 'new',
                instrument: {instrument_name: 'instr1', instrument: 'a'},
            });
        }, 2000); // after timeout application crash with:
    }, []);

    const gridContext = {instruments: testStore.instruments};

    const onGridReady = (params) => {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);

        setRowData([
            {
                athlete: 'athlete1',
                age: 12,
                country: 'abc',
                year: 2000,
                date: '20/01/2001',
            },
        ]);
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
                <pre>{JSON.stringify(gridContext, null, 2)}</pre>
                Wait a few seconds - app shouldn't crash when frozen data is sent to the grid
                <AgGridReact
                    modules={AllModules}
                    defaultColDef={{
                        flex: 1,
                        minWidth: 100,
                    }}
                    enableRangeSelection={true}
                    onGridReady={onGridReady}
                    rowData={rowData}
                    context={gridContext}

                    immutableData
                    getRowNodeId={(data) => data.athlete}
                >
                    <AgGridColumn field="athlete" minWidth={150}/>
                </AgGridReact>
            </div>
        </div>
    );
};
