import React from "react";
import { FloatLabel } from "primereact/floatlabel";
import { InputText } from "primereact/inputtext";

export default function NumeralsDemo({ arres, submit }) {
  return (
    <div
      className="card d-flex flex-row gap-3 p-fluid"
      style={{
        display: "flex",
        flexDirection: "row",
        width: "100%",
        paddingInline: "100px",
        // backgroundColor: "red",
        alignSelf: "center",
        justifyContent: "space-between",
        marginTop: "50px",
        alignItems: "center",
      }}
    >
      {arres?.map((val, i) => (
        <div style={{ width: "280px" }} key={i}>
          <FloatLabel>
            <InputText
              id="username"
              value={val.value}
              onChange={(e) => {
                val.onpress(e.target.value);
              }}
            />
            <label htmlFor="username">{val?.lable}</label>
          </FloatLabel>
        </div>
      ))}

      <span
        className="pi pi-search"
        style={{ fontSize: "1.5rem", color: "#06B6D4", marginLeft: "10px" }}
        onClick={submit}
      ></span>
    </div>
  );
}
