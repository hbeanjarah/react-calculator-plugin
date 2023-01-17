import React from "react";
import { Button } from "./Button";
import { Uturn } from "./icon/Uturn";

const Calculator = () => {
  return (
    <div className="w-1/4">
      <div className="w-full h-28 flex items-center">
        <input
          type="text"
          id="first_name"
          className="bg-gray-50 w-full h-12 focus-visible:outline-none text-5xl"
        />
      </div>
      <div className="w-full bg-white grid grid-cols-4 gap-2">
        <div>
          <Button color="dark-light" label="/" />
        </div>
        <div>
          <Button color="dark-light" label="+" />
        </div>
        <div>
          <Button color="dark-light" label="x²" />
        </div>
        <div>
          <Button color="dark-light" label={<Uturn />} />
        </div>
        <div>
          <Button color="gray" label="7" />
        </div>
        <div>
          <Button color="gray" label="8" />
        </div>
        <div>
          <Button color="gray" label="9" />
        </div>
        <div>
          <Button color="dark-light" label="C" />
        </div>
        <div>
          <Button color="gray" label="4" />
        </div>
        <div>
          <Button color="gray" label="5" />
        </div>
        <div>
          <Button color="gray" label="6" />
        </div>
        <div>
          <Button color="dark-light" label="X" />
        </div>
        <div>
          <Button color="gray" label="1" />
        </div>
        <div>
          <Button color="gray" label="2" />
        </div>
        <div>
          <Button color="gray" label="3" />
        </div>
        <div>
          <Button color="dark-light" label="-" />
        </div>
        <div>
          <Button color="gray" label="%" />
        </div>
        <div>
          <Button color="gray" label="0" />
        </div>
        <div>
          <Button color="gray" label="," />
        </div>
        <div>
          <Button color="dark" label="=" />
        </div>
      </div>
    </div>
  );
};

export default Calculator;
