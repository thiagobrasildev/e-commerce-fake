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
        className="flex items-center justify-center cursor-pointer"
        onClick={() => setIsActive(!isActive)}
      >
        {!isActive && <FiSearch size={25} />}
        {isActive && <MdClose size={25} />}
      </div>

      {isActive && (
        <div className="flex justify-start items-center absolute rounded-3xl border border-primary bg-white px-2 left-[2.2%] w-[95%] mt-8">
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
    </>
  );
};

export default SearchBar;
