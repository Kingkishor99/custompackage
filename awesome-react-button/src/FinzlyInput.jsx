import React, { useState } from "react";
import { InputText } from "primereact/inputtext";
import "primereact/resources/themes/lara-light-cyan/theme.css";

export default function FinzlyInput() {
  const [value, setValue] = useState("");

  return (
    <div className="card flex justify-content-center">
      <InputText value={value} onChange={(e) => setValue(e.target.value)} />
    </div>
  );
}
