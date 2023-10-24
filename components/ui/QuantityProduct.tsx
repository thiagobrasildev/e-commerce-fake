"use client";

import React, { useState } from "react";

// icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

type QuantityProductProps = {
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};

const QuantityProduct = ({ quantity, setQuantity }: QuantityProductProps) => {
  const incrementeItem = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementeItem = () => {
    setQuantity((prev) => (prev === 1 ? prev : prev - 1));
  };

  return (
    <div className="flex flex-1 gap-1">
      <div className="flex bg-gray-200 text-fontColor items-center justify-center px-5">
        {quantity}
      </div>
      <div className="flex flex-col items-center">
        <button
          className="bg-white border border-gray-400 flex justify-center items-center p-1"
          onClick={incrementeItem}
        >
          <FaAngleUp />
        </button>
        <button
          className="bg-white border border-gray-400 flex justify-center items-center p-1"
          onClick={decrementeItem}
        >
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default QuantityProduct;
