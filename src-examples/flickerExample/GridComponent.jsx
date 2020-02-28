import React from "react";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";

const createRowData = n =>
    Array(n).fill(0).map((_, i) => ({
        col1: i,
        col2: i,
        col3: i,
    }));

const CellRenderer1 = props => {
    const { value } = props;
    return <div>{`Renderer 1: ${value}`}</div>
}
const CellRenderer3 = props => {
    const { value } = props;
    return <div>{`Renderer 3: ${value}`}</div>
}

export default class GridExample extends React.Component {
    constructor(props) {
        super(props);
        this.rowData = createRowData(5000);

        // when columnDefs state changes,
        // all columns with React cell renderers will flicker
        // regardless of which columnDef changed
        this.state = {
            columnDefs: [
                {
                    headerName: 'React Component Column 1',
                    colId: 'col1',
                    field: 'col1',
                    cellRendererFramework: CellRenderer1,
                    cellRendererParams: {foo: true},
                },
                { headerName: 'Column 2', colId: 'col2', field: 'col2'},
                {
                    headerName: 'React Component Column 3',
                    colId: 'col3',
                    field: 'col3',
                    cellRendererFramework: CellRenderer3
                },
            ]
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        // this will cause all React cell renderers to flicker
        this.setState(prevState => {
            const { columnDefs: prevColumnDefs } = prevState;
            const newColumnDefs = prevColumnDefs.map(prevColDef => {
                // no changes to other columns
                if (prevColDef.field !== 'col1') {
                    return prevColDef;
                }
                // flip 'foo' for col 1
                const prevFoo = prevColDef.cellRendererParams.foo;
                return {...prevColDef, cellRendererParams: {foo: !prevFoo}};
            });
            return {columnDefs: newColumnDefs};
        });
    }

    render() {
        const { columnDefs } = this.state;
        return (
            <div className="ag-theme-balham" style={{ height: '300px' }}>
                <button onClick={this.handleClick}>Change Column 1 columnDef</button>
                <AgGridReact
                    rowData={this.rowData}
                    columnDefs={columnDefs}
                    modules={AllModules}
                />
            </div>
        )
    }
}
