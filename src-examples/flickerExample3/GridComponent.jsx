import React, {useState} from "react";

import {AllModules} from '@ag-grid-enterprise/all-modules';
import {AgGridReact} from "@ag-grid-community/react";

const Foo = props => {
    if (!props.column.colDef.headerComponentParams.foo)
        return null
    return <b style={{color: 'black'}}>F</b>;
}

const CellRenderer1 = props => <span><b>Renderer 1: </b>{props.value}</span>;
const CellRenderer2 = props => <span><i>Renderer 2: </i>{props.value}</span>;
const HeaderRenderer = props => <span>{props.displayName} <Foo {...props} /></span>;

const rowData = [];
for (var i = 0; i < 5; i++) {
    rowData.push({
        col1: i, col2: i, col3: i,
    });
}


const initialState = {
    modules: AllModules,
    rowData,
    columnDefs: [
        {
            headerComponentFramework: HeaderRenderer,
            headerComponentParams: {foo: true},
            headerName: 'React Header',
            colId: 'col1',
            field: 'col1',
            cellRendererFramework: CellRenderer1,
        },
        {headerName: '#', colId: 'col2', field: 'col2', width: 60},
        {
            headerName: 'React Component Column 3',
            colId: 'col3',
            field: 'col3',
            cellRendererFramework: CellRenderer2
        },
    ]
};

const toggleFirstColumn = prevState => {
    const columnDefs = prevState.columnDefs.map(column => {
        if (column.field !== 'col1')
            return column;
        const params = column.headerComponentParams;
        return {...column, headerComponentParams: {foo: !params.foo}}
    });
    return {...prevState, columnDefs};
}

// can flicker on very rare occasions
export default function GridExample() {
    const [state, setState] = useState(initialState);
    const handleClick = () => setState(toggleFirstColumn);

    return (
        <div className="ag-theme-balham" style={{height: '300px', width: 500}}>
            <button onClick={handleClick}>Change Column 1 columnDef</button>
            <AgGridReact {...state} />
        </div>
    );
}
