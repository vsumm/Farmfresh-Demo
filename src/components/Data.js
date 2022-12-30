import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

function Fraction() {
  const columnDefs= [
    { headerName: "CAMERA_1", field: "cam 1",filter: 'agSetColumnFilter'},
    { headerName: "CAMERA_2", field: "cam 2 "}, 
    {headerName: "DATE",field: "date" },
    ]

const defaultColDef={
  sortable:true,
  editable:true,
  flex:1,filter:true,
  floatingFilter:true,
  filter:true
}

const onGridReady=(params)=>{
  console.log("grid is ready")
  fetch("https://vsumm.github.io/json-server/db.json").then(resp=>resp.json())
  .then(resp=>{console.log(resp)
    params.api.applyTransaction({add:resp})})
}
  return (
    <div className="App">
      <h1 align="center">Human Activity/ Object Detection </h1>
      <br />
      <br />
      {/* <h3>Camera details</h3> */}
      <div className="ag-theme-alpine" style={ {height: '350px'} }>
        <AgGridReact
            columnDefs={columnDefs}
            // rowData={rowData}
            pagination={true}
            paginationPageSize={5}
            defaultColDef={defaultColDef}
            onGridReady={onGridReady}>
        </AgGridReact>
      </div>
    </div>
  );
}

export default Fraction;