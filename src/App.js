import "./App.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { Button } from "mypackage";

function App() {
  return (
    <PrimeReactProvider>
      <Button>dsdsd</Button>
    </PrimeReactProvider>
  );
}

export default App;
