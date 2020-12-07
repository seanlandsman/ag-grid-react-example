import React, {useEffect, useState} from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core/styles";
import {AgGridReact} from "@ag-grid-community/react";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import NotificationsIcon from '@material-ui/icons/Notifications';
import MuiAppBar from '@material-ui/core/AppBar';
import '@ag-grid-community/core/dist/styles/ag-grid.css';
import '@ag-grid-community/core/dist/styles/ag-theme-balham.css';

// Customized theme.
let theme = createMuiTheme({
    typography: {
        fontSize: 30
    }
});

const TestRenderer = ({value}) => (<NotificationsIcon/>);


const testData = {
    columnDefs: [
        {headerName: "Make", field: "make"},
        {headerName: "Model", field: "model"},
        // If TestRenderer is removed from the columnDefs, thre will be no issues with element sizes.
        {headerName: "Price", field: "price", cellRendererFramework: TestRenderer}
    ],
    rowData: [
        {make: "Toyota", model: "Celica", price: 35000,},
        {make: "Ford", model: "Mondeo", price: 32000},
        {make: "Porsche", model: "Boxter", price: 72000}
    ]
};

export default () => {
    const [rowData, setRowData] = useState(testData.rowData);


    // useEffect(() => {
    //     setTimeout(() => {
    //         setRowData()
    //     }, 2000)
    // }, []);

    return (
        <div>
            <ThemeProvider theme={theme}>
                Bell Icon Should Be Large - Larger than Row Height
                {/* If MuiAppBar appbar is not rendered, the UI will not have the issue. */}
                <MuiAppBar position="static">
                    <NotificationsIcon/>
                </MuiAppBar>
                <div className="ag-theme-balham" style={{height: '200px', width: '600px'}}>
                    <AgGridReact
                        modules={AllModules}
                        columnDefs={testData.columnDefs}
                        rowData={rowData}>
                    </AgGridReact>
                </div>
            </ThemeProvider>
        </div>
    );
}
