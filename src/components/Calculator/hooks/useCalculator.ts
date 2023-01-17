import React from "react";

export const useCalculator = () => {
  const validateInput = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const keyCode = +event.key;
    const excludedKeys = [8, 37, 39, 46];
    if (
      !(
        (keyCode >= 48 && keyCode <= 57) ||
        (keyCode >= 96 && keyCode <= 105) ||
        excludedKeys.includes(keyCode)
      )
    ) {
      event.preventDefault();
    }
  };

  return { validateInput };
};
