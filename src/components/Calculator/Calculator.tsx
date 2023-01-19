import React from "react";
import { Button } from "./Button";
import { useCalculator } from "./hooks/useCalculator";
import { Uturn } from "./icon/Uturn";
import * as math from "mathjs";

interface CalculatorProps {
  setCalculatorState: React.Dispatch<React.SetStateAction<string>>;
  calculatorState: string;
}
const Calculator = ({
  calculatorState,
  setCalculatorState,
}: CalculatorProps) => {
  const { validateInput } = useCalculator({ setCalculatorState });

  const addToResult = (value: string) => {
    setCalculatorState((prev) => prev + value);
  };

  const removeCharacter = () => {
    const editedResult = calculatorState.slice(0, -1);
    setCalculatorState(editedResult);
  };

  const clear = () => {
    setCalculatorState("");
  };

  const equal = () => {
    try {
      setCalculatorState(math.evaluate(calculatorState));
    } catch (e) {
      setTimeout(() => setCalculatorState(""), 1000);
    }
  };

  const squaredResult = (resultPow: string) => {
    const converResult = +resultPow;
    const suqaredResult = converResult ** 2;
    setCalculatorState(String(suqaredResult));
  };

  return (
    <div className="w-2/6">
      <div className="w-full h-28 flex items-center">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 w-full h-12 focus-visible:outline-none text-5xl"
          onKeyDown={validateInput}
          value={calculatorState}
          onChange={() => {}}
        />
      </div>
      <div className="w-full bg-white grid grid-cols-4 gap-y-2">
        <div>
          <Button
            onClick={() => {
              addToResult("/");
            }}
            color="dark-light"
            label="/"
          />
        </div>
        <div>
          <Button
            color="dark-light"
            label="+"
            onClick={() => {
              addToResult("+");
            }}
          />
        </div>
        <div>
          <Button
            color="dark-light"
            label="x²"
            onClick={() => {
              squaredResult(calculatorState);
            }}
          />
        </div>
        <div>
          <Button
            color="dark-light"
            onClick={(e) => {
              if (calculatorState === "") {
                e.preventDefault();
              } else {
                removeCharacter();
              }
            }}
            label={<Uturn />}
          />
        </div>
        <div>
          <Button
            onClick={() => {
              addToResult("7");
            }}
            color="gray"
            label="7"
          />
        </div>
        <div>
          <Button
            onClick={() => {
              addToResult("8");
            }}
            color="gray"
            label="8"
          />
        </div>
        <div>
          <Button
            onClick={() => {
              addToResult("9");
            }}
            color="gray"
            label="9"
          />
        </div>
        <div>
          <Button
            color="dark-light"
            label="C"
            onClick={() => {
              clear();
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="4"
            onClick={() => {
              addToResult("4");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="5"
            onClick={() => {
              addToResult("5");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="6"
            onClick={() => {
              addToResult("6");
            }}
          />
        </div>
        <div>
          <Button
            color="dark-light"
            label="X"
            onClick={() => {
              addToResult("*");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="1"
            onClick={() => {
              addToResult("1");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="2"
            onClick={() => {
              addToResult("2");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="3"
            onClick={() => {
              addToResult("3");
            }}
          />
        </div>
        <div>
          <Button
            color="dark-light"
            label="-"
            onClick={() => {
              addToResult("-");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="%"
            onClick={() => {
              addToResult("%");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label="0"
            onClick={() => {
              addToResult("0");
            }}
          />
        </div>
        <div>
          <Button
            color="gray"
            label=","
            onClick={() => {
              addToResult(".");
            }}
          />
        </div>
        <div>
          <Button
            color="dark"
            label="="
            onClick={() => {
              equal();
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
