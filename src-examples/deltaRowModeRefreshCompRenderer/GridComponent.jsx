import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const INITIAL_ROWS = 100;

class FrameworkCell extends React.Component {
    state = {value: this.props.value};

    render() {
        return <b>{this.state.value}</b>;
    }

    refresh(newParams) {
        this.setState({value: newParams.value});
        return true;
    }
}

const columnDefs = [
    {
        headerName: "ID",
        field: "id",
        sort: "desc"
    },
    {
        headerName: "Data",
        field: "data",
    },
    {
        headerName: "React Data",
        field: "data",
        cellRendererFramework: FrameworkCell
    }
];

let id = 0;

const initialRowData = Array.from({length: INITIAL_ROWS}, () => ({
    id: ++id,
    data: `Data ${id}`
}));

const containerStyle = {
    height: "300px",
    width: "600px"
};

function getRowNodeId(row) {
    return row.id;
}

export default function App() {
    const [rowData, setRowData] = React.useState(initialRowData);

    function addNew() {
        setRowData(origRowData => [
            ...origRowData,
            {
                id: ++id,
                data: `New Data ${id}`
            }
        ]);
    }

    function changeLastRow() {
        setRowData(origRowData =>
            origRowData.map(
                row =>
                    row.id === id
                        ? {
                            ...row,
                            data: `${row.data}*`
                        }
                        : row
            )
        );
    }

    return (
        <>
            <div className="ag-theme-balham" style={containerStyle}>
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    modules={AllModules}
                    getRowNodeId={getRowNodeId}
                    deltaRowDataMode
                />
            </div>
            <button id="addNewRow" onClick={addNew}>Add New</button>
            <button id="modifyRow" onClick={changeLastRow}>Change Row {id}</button>
        </>
    );
}

