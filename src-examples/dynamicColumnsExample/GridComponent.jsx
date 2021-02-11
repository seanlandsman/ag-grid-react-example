import React, {useState} from 'react';
import {AgGridColumn, AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

export default () => {
    const [rowData, setRowData] = useState([
        {
            athlete: 'athlete1',
            age: 12,
            country: 'abc',
            year: 2000,
            date: '20/01/2001',
        },
    ]);

    const [showAthlete, setShowAthlete] = useState(true);

    return (
        <div style={{width: '500px', height: '500px'}}>
            <button onClick={() => setShowAthlete(!showAthlete)}>Toggle Athlete Column</button>
            <div
                id="myGrid"
                style={{
                    height: '100%',
                    width: '100%',
                }}
                className="ag-theme-alpine"
            >
                applyColumnDefOrder important to maintain column order
                <AgGridReact
                    modules={AllModules}
                    rowData={rowData}
                    immutableData
                    getRowNodeId={(data) => data.athlete}
                    applyColumnDefOrder={true}
                >
                    {showAthlete && <AgGridColumn field="athlete" minWidth={150}/>}
                    <AgGridColumn field="age" minWidth={150}/>
                    <AgGridColumn field="country" minWidth={150}/>
                </AgGridReact>
            </div>
        </div>
    );
};
