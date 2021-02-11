import * as React from "react";
import {AllModules} from "@ag-grid-enterprise/all-modules";
import {AgGridColumn, AgGridReact} from "@ag-grid-community/react";
import {Field, Formik} from "formik";
import NumericEditor from "./NumericEditor";

const sampleData = {
    data: [
        {
            name: `01 Item`,
            value: ""
        },
        {
            name: `03 Item`,
            value: ""
        },
        {
            name: `02 Item`,
            value: ""
        }
    ]
};

export default function App() {
    const grid = React.useRef(null);
    const [data, setData] = React.useState(sampleData);

    const doFitColumns = () => {
        if (grid.current) {
            console.log("fitColumns");
            grid.current.api.sizeColumnsToFit();
        }
    };

    const onGridReady = ({api, columnApi}) => {
        console.log("grid ready");
        grid.current = {api, columnApi};
        doFitColumns();
    };

    const onRowDataChanged = () => {
        doFitColumns();
    };

    return (
        <Formik
            validateOnChange={false}
            initialValues={data}
            onSubmit={console.log}
        >
            {({values, setFieldValue}) => {
                console.log("formik re-rendered");

                return (
                    <div className="App ag-theme-alpine" style={{height: 500, width: 500}}>
                        <AgGridReact
                            rowData={values.data}
                            onGridReady={onGridReady}
                            onRowDataChanged={onRowDataChanged}
                            modules={AllModules}
                            onCellValueChanged={({
                                                     newValue,
                                                     rowIndex,
                                                     colDef: {field}
                                                 }) => {
                                setFieldValue(`data.${rowIndex}.${field}`, +newValue);
                            }}
                            frameworkComponents={{
                                numericCellEditor: NumericEditor
                            }}
                        >
                            <AgGridColumn
                                headerName="Selected"
                                field="name"
                                filter={true}
                                sortable={true}
                            />
                            <AgGridColumn
                                headerName="Top"
                                field="value"
                                editable={true}
                                cellEditor="numericCellEditor"
                                singleClickEdit={true}
                                valueFormatter={({value}) =>
                                    value === "" ? "Click To Edit" : value
                                }
                            />
                        </AgGridReact>

                        <pre>{JSON.stringify(values, null, 2)}</pre>
                    </div>
                    // </Form>
                );
            }}
        </Formik>
    );
}
