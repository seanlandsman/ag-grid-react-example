import React from "react";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import {AgGridReact} from "@ag-grid-community/react";
import {Button, createMuiTheme, MuiThemeProvider} from "@material-ui/core";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#85ca37",
            contrastText: "#fff"
        }
    }
});

class CRF extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <Button variant="contained" color="primary" onClick={() => this.setState({count: this.state.count + 1})}>
                Button - Interactive - should be green {this.state.count}
            </Button>
        );
    }

}

export default props => {
    const columns = [
        {
            headerName: "A",
            field: "a",
            minWidth: 400,
            cellRendererFramework: CRF
        },
        {
            headerName: "B",
            field: "b",
            minWidth: 300,
            cellRendererFramework: params => {
                return (
                    <>
                        <Button variant="contained" color="primary">
                            Button - should be green
                        </Button>
                    </>
                );
            }
        }
    ];

    return (
        <MuiThemeProvider theme={theme}>
            <div>
                <h2>Styling bug</h2>
                <Button variant="contained" color="primary">
                    Button - Should be green
                </Button>
                <div
                    className="ag-theme-alpine"
                    style={{
                        height: "600px",
                        width: "800px"
                    }}
                >
                    <AgGridReact
                        rowHeight={50}
                        modules={AllModules}
                        columnDefs={columns}
                        rowData={[
                            {a: "Toyota", b: "Celica"},
                            {a: "Ford", b: "Mondeo"},
                            {a: "Porsche", b: "Boxter"}
                        ]}
                    />
                </div>
            </div>
        </MuiThemeProvider>
    );
};

