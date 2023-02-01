import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import NavBar from "./components/Common/NavBar/NavBar";
import ConcreteSelector from "./components/ConcreteSelector/ConcreteSelector";
import DesignatedConcreteChart from "./components/DesignatedConcreteChart/DesignatedConcreteChart";

function App() {
    const [selectedConcrete, setSelectedConcrete] = useState<string>("");

    return (
        <div id="app" className="App">
            <NavBar />
            <ConcreteSelector
                selectedConcrete={selectedConcrete}
                setSelectedConcrete={setSelectedConcrete}
            />
            <div className="m-[30px]"></div>
            <DesignatedConcreteChart selectedConcrete={selectedConcrete} />
        </div>
    );
}

export default App;
