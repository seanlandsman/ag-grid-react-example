import React, {Component} from "react";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import {AgGridReact} from "@ag-grid-community/react";
import {Button, createMuiTheme, MuiThemeProvider} from "@material-ui/core";

class CellRenderer extends Component {
    render() {
        return (
            <div>Age: {this.props.value}</div>
        );
    }

    getValue() {
        return 'Test Value';
    }
}

class EditorComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: this.props.value
        };
    }

    render() {
        return (
            <input type="text" value={this.state.value} onChange={this.handleChange} style={{ width: "100%" }} />
        );
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    };

    getValue() {
        return this.state.value;
    }

    // for testing
    setValue(newValue) {
        this.setState({
            value: newValue
        });
    }

    isCancelBeforeStart() {
        return false;
    }

    isCancelAfterEnd() {
        return false;
    };
}

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            columnDefs: [{
                field: "age",
                editable: true,
                cellRendererFramework: CellRenderer,
                cellEditorFramework: EditorComponent
            }],
            rowData: [{ age: 24 }]
        };
    }

    onGridReady(params) {
        this.api = params.api;
    }

    render() {
        return (
            <div
                className="ag-theme-balham" style={{height: 500, width: 500}}>
                Should refresh cell component after editing
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    onGridReady={this.onGridReady.bind(this)}
                    modules={AllModules}
                    rowData={this.state.rowData}   />
            </div>
        );
    }
}
