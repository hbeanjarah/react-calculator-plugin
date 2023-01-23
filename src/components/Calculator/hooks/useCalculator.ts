import React from "react";
import * as math from "mathjs";

export const useCalculator = ({
  setCalculatorState,
}: {
  setCalculatorState: (value: React.SetStateAction<string>) => void;
}) => {
  const validateInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      setCalculatorState((prev) => String(math.evaluate(prev)));
    } else {
      let authorizedKeyCode = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        ".",
        "Divide",
        "Comma",
        "Multiply",
        "Enter",
        "Subtract",
        "Add",
        "Period",
      ];
      console.log("event from key board", event.key, event.code);

      const isNumpad = event.code.includes("Numpad");
      const isDigit = event.code.includes("Digit");

      let splittedKeyCode;

      if (isNumpad) {
        splittedKeyCode = event.code.split("Numpad");
      } else if (isDigit) {
        splittedKeyCode = event.code.split("Digit");
      } else {
        splittedKeyCode = "";
      }

      if (splittedKeyCode === "" && authorizedKeyCode.includes(event.code)) {
        setCalculatorState((prev) => prev + event.key);
      } else if (splittedKeyCode !== "" && splittedKeyCode.length > 0) {
        const currentKeyCode = splittedKeyCode[1];
        authorizedKeyCode.includes(currentKeyCode) &&
          setCalculatorState((prev) => prev + event.key);
      } else {
        event.preventDefault();
      }
      if (event.code === "Backspace") {
        setCalculatorState((prev) => prev.slice(0, -1));
      }
    }
  };

  return { validateInput };
};
