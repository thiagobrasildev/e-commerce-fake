import React from "react";
import Link from "next/link";

// icons
import { AiOutlineClose } from "react-icons/ai";
// constants
import { menu } from "../../constants/data";

type MenuMobileProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuMobile = ({ isOpen, setIsOpen }: MenuMobileProps) => {
  return (
    <div
      className="w-[100vw] h-[100vh] fixed z-50 top-0 left-0 bg-black/40 flex justify-start"
      onClick={() => setIsOpen(false)}
    >
      <nav
        className="flex bg-white flex-col p-5 w-[70%]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full py-3 justify-end items-center">
          <AiOutlineClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="pt-8 flex flex-col">
          {menu.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex py-2 border-b border-gray-300"
            >
              {item.title}
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default MenuMobile;
