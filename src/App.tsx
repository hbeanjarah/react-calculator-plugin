import React, { useState } from "react";
import { Calculator } from "./components/Calculator";

const App = () => {
  const [calculatorState, setCalculatorState] = useState("");
  return (
    <div className="w-full flex justify-center">
      <Calculator
        calculatorState={calculatorState}
        setCalculatorState={setCalculatorState}
      />
    </div>
  );
};

export default App;
