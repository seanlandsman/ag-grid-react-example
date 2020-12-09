import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const INITIAL_ROWS = 100;

class FrameworkCellWithoutRefresh extends React.Component {
    state = {value: this.props.value};

    render() {
        return <b>{this.state.value}</b>;
    }
}

class FrameworkCellWithRefresh extends React.Component {
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
        sort: "desc",
        width: 100
    },
    {
        headerName: "Data",
        field: "data",
    },
    {
        headerName: "React Data (with refresh)",
        field: "data",
        cellRendererFramework: FrameworkCellWithRefresh,
        width: 300
    },
    {
        headerName: "React Data (without refresh)",
        field: "data",
        cellRendererFramework: FrameworkCellWithoutRefresh,
        width: 300
    }
];

let id = 0;

const initialRowData = [];
for (var i = 0; i < INITIAL_ROWS; i++) {
    initialRowData.push({
        id: ++id,
        data: `Data ${id}`
    });
}

const containerStyle = {
    height: "300px",
    width: "800px"
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
                    immutableData
                />
            </div>
            <button id="addNewRow" onClick={addNew}>Add New</button>
            <button id="modifyRow" onClick={changeLastRow}>Change Row {id}</button>
        </>
    );
}

