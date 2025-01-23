import "./App.css";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import FinzlyTab from "./components/FinzlyTab";
import FinzlyInputWlable from "./components/FinzlyInputWlable";
import "primeicons/primeicons.css";
import React from "react";
import FinzlyTable from "./components/FinzlyTable";
// import { FinzlyInput} from "myrbutton";
// import  {FinzlyTable}  from "myrbutton";
const a = [
  { label: "Notification", icon: "pi pi-flag", url: "/tabmenu" },
  {
    label: "Notification Config",
    icon: "pi pi-wrench",
    command: () => {
      // router.push('/unstyled');
    },
  },
  {
    label: "Notification Request",
    icon: "pi pi-link",
    command: () => {
      // router.push('/unstyled');
    },
    // url: 'https://react.dev/'
  },
];

const aa = {
  id: "1000",
  code: "Finzly Cashos",
  name: "Product Description",
  description: "Product Description",
  image: "bamboo-watch.jpg",
  price: 65,
  category: "Description",
  quantity: "Any",
  inventoryStatus: "INSTOCK",
  rating: 5,
  status: "Active",
  UpdateAt: new Date().toLocaleDateString("en-US")
};
const b = [aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa, aa];

function App() {
  const [value1, setvalue1] = React.useState("");
  const [value2, setvalue2] = React.useState("");
  const [value3, setvalue3] = React.useState("");
  const [value4, setvalue4] = React.useState("");

  const arres = [
    { val: value1, onpress: (e) => setvalue1(e), lable: "Source" },
    { val: value2, onpress: (e) => setvalue2(e), lable: "To" },
    { val: value3, onpress: (e) => setvalue3(e), lable: "Subject" },
    { val: value4, onpress: (e) => setvalue4(e), lable: "Enter Date" },
  ];

  console.log({ value1, value2, value3, value4 });

  const submit = () => {
    console.log("form submited");
  };
  return (
    <div>
      <FinzlyTab arr={a} />
      <FinzlyInputWlable arres={arres} submit={submit} />
      <FinzlyTable value={b} />
    </div>
  );
}

export default App;
