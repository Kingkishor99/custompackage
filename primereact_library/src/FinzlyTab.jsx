import React from "react";
import { TabMenu } from "primereact/tabmenu";
// import { useRouter } from 'next/router';

export default function FinzlyTab({ arr }) {
  // const router = useRouter();
  const items = arr;

  return (
    <div
      className="card"
      style={{
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
      }}
    >
      <TabMenu model={items} />
    </div>
  );
}
