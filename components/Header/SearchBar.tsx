"use client";

import { useState } from "react";
// icons
import { FiSearch } from "react-icons/fi";
import { MdClose } from "react-icons/md";

const SearchBar = () => {
  const [isActive, setIsActive] = useState(false);
  return (
    <>
      <div
        className="flex items-center justify-center cursor-pointer lg:hidden"
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive && <FiSearch size={25} />}
        {isActive && <MdClose size={25} />}
      </div>

      {isActive && (
        <div className="flex justify-start items-center absolute rounded-3xl border border-primary bg-white px-2 left-[2.2%] w-[95%] mt-8 z-50">
          <input
            type="text"
            placeholder="Pesquisar produto..."
            className="flex-1 flex p-3 border-none outline-none text-base rounded-3xl text-fontColor"
          />
          <button className="pr-2">
            <FiSearch size={25} />
          </button>
        </div>
      )}

      {/* serachBar desktop */}

      <div className="hidden lg:flex justify-start items-center rounded-3xl border border-primary bg-white pl-2 mr-6">
        <input
          type="text"
          placeholder="Pesquisar produto..."
          className="flex-1 flex p-2 border-none outline-none text-base rounded-3xl text-fontColor"
        />
        <button className="pr-2 bg-primary text-white flex py-3 pl-4 pr-6 border border-primary -mr-1 rounded-br-3xl rounded-tr-3xl text-sm">
          Pesquisar
        </button>
      </div>
    </>
  );
};

export default SearchBar;
