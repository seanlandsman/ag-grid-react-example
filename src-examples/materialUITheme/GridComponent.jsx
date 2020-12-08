import React from "react";
import {makeStyles} from "@material-ui/styles";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import {AgGridReact} from "@ag-grid-community/react";

let theme = createMuiTheme({
    palette: {
        background: {
            paper: 'green'
        }
    }
});

const useStyles = makeStyles((theme) =>
    ({
        GridStyle: {
            height: "100%",
            width: "100%",
            "& .ag-root-wrapper": {border: `1px solid ${theme.palette.background.paper}`},
            "& .ag-root": {backgroundColor: theme.palette.background.paper},
        }
    })
);

const columnDefs = [{headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
]

const rowData = [
    {make: "Toyota", model: "Celica", price: 35000,},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
];

const GridConfig = () => {
    const classes = useStyles();
    return (
        <div style={{height: '200px', width: '600px'}}>
            <div className={`ag-theme-balham ${classes.GridStyle}`}>
                <AgGridReact
                    modules={AllModules}
                    columnDefs={columnDefs}
                    rowData={rowData}>
                </AgGridReact>
            </div>
        </div>
    );
};

export default props => (
    <ThemeProvider theme={theme}>
        <GridConfig/>
    </ThemeProvider>
)
