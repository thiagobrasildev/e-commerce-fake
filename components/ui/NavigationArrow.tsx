import React from "react";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NavigationArrow = () => {
  return (
    <div className="flex p-2 gap-2 justify-center items-center">
      <button className="flex p-1 justify-center items-center rounded-full border-2 border-gray-400 hover:border-primary transition-colors duration-300">
        <IoIosArrowBack size={18} />
      </button>
      <button className="flex p-1 justify-center items-center rounded-full border-2 border-gray-400 hover:border-primary transition-colors duration-300">
        <IoIosArrowForward size={18} />
      </button>
    </div>
  );
};

export default NavigationArrow;
