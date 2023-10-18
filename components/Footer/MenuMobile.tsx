import React, { useState } from "react";

// icons
import { FaAngleDown } from "react-icons/fa";

type MenuMobileProps = {
  title: string;
  children: React.ReactNode;
};

const MenuMobile = ({ title, children }: MenuMobileProps) => {
  const [isOpen, setIsOpen] = useState<Boolean>(false);

  return (
    <div className="flex flex-col w-full">
      <div
        className="flex items-center justify-between w-full py-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <p className="text-base text-fontColor font-semibold">{title}</p>
        <span>
          <FaAngleDown />
        </span>
      </div>
      {isOpen && <div className="py-3">{children}</div>}
    </div>
  );
};

export default MenuMobile;
