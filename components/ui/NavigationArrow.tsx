import React from "react";

// icons
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

type NavigationArrowProps = {
  left: (e: React.MouseEvent<HTMLButtonElement>) => void;
  rigth: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const NavigationArrow = ({ left, rigth }: NavigationArrowProps) => {
  return (
    <div className="flex p-2 gap-2 justify-center items-center">
      <button
        onClick={left}
        className="flex p-1 justify-center items-center rounded-full border-2 border-gray-400 hover:border-primary transition-colors duration-300"
      >
        <IoIosArrowBack size={18} />
      </button>
      <button
        onClick={rigth}
        className="flex p-1 justify-center items-center rounded-full border-2 border-gray-400 hover:border-primary transition-colors duration-300"
      >
        <IoIosArrowForward size={18} />
      </button>
    </div>
  );
};

export default NavigationArrow;
