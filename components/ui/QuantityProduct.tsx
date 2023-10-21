"use client";

import React from "react";

// icons
import { FaAngleUp, FaAngleDown } from "react-icons/fa";

const QuantityProduct = () => {
  return (
    <div className="flex flex-1 gap-1">
      <div className="flex bg-gray-200 text-fontColor items-center justify-center px-5">
        1
      </div>
      <div className="flex flex-col items-center">
        <button className="bg-white border border-gray-400 flex justify-center items-center p-1">
          <FaAngleUp />
        </button>
        <button className="bg-white border border-gray-400 flex justify-center items-center p-1">
          <FaAngleDown />
        </button>
      </div>
    </div>
  );
};

export default QuantityProduct;
