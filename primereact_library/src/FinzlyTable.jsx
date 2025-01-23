import React from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

export default function FinzlyTable({ value }) {
  return (
    <div className="card" style={{ marginTop: "30px", paddingInline: "20px" }}>
      <DataTable value={value} stripedRows tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Temaplate Name"></Column>
        <Column field="name" header="Subject"></Column>
        <Column field="category" header="To"></Column>
        <Column field="quantity" header="Source"></Column>
        <Column field="status" header="Status"></Column>
        <Column field="UpdateAt" header="Updated At"></Column>
      </DataTable>
    </div>
  );
}
