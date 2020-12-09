import React, { useRef, useState, useEffect } from "react";

import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const Grid =  props => {
    const gridApiRef = useRef(null);
    const [editingState, setEditingState] = useState(null);

    useEffect(() => {
        if (!!editingState) {
            handleLastNameChanging(
                props.data,
                editingState.item,
                editingState.newValue
            );
        }
    }, [editingState]);

    const columns = [
        { field: "firstName" },
        {
            field: "lastName",
            valueSetter: params =>
                setEditingState({ item: params.data, newValue: params.newValue }),
            editable: true
        }
    ];

    return (
        <div className="ag-theme-balham" style={{ height: "350px" }}>
            Last Name with flicker old value after editing - nature of this example
            <AgGridReact
                onGridReady={handleGridReady}
                rowData={props.data || []}
                modules={AllModules}
                columnDefs={columns}
            />
        </div>
    );

    function handleGridReady(event) {
        gridApiRef.current = event.api;
    }

    function handleLastNameChanging(currentProps, item, nextValue) {
        console.log("ITEM COUNT", currentProps.length);

        const nextData = currentProps.map(dataItem => {
            console.log(dataItem.id, item.id);
            if (dataItem.id !== item.id) {
                return dataItem;
            }

            return {
                ...dataItem,
                lastName: nextValue
            };
        });

        console.log("NEXT DATA", nextData);
        props.onDataChanged(nextData);

        return true;
    }
};


export default () => {
    const [data, setData] = useState([]);

    return (
        <div style={{height: 500, width: 500}}>
            <Grid
                data={data}
                onDataChanged={handleDataChanged}
            />

            <div style={{marginTop: 50}}>
                Editing last name should update last name
                <button onClick={handleAddRow}>Add Row</button>
            </div>
        </div>
    );

    function handleAddRow() {
        setData(prev => {
            return [...prev, { id: prev.length + 1, firstName: 'FirstName', lastName: 'LastName' }];
        });
    }

    function handleDataChanged(nextData) {
        setData(nextData);
    }
}
