import React from "react";
// icons
import { FaShoppingCart } from "react-icons/fa";

// components
import { NavMobile, SearchBar, UserIcons } from ".";

const Header = () => {
  return (
    <header className="flex px-3 py-6 justify-start md:justify-center items-center border-b-[1px] border-gray-200">
      <div className="flex w-full md:max-w-[1140px] justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="md:hidden">
            <NavMobile />
          </div>
          <div className="flex items-center justify-center">
            <FaShoppingCart size={25} className="text-primary" />
            <h1 className="text-fontColor font-semibold text-3xl">CartFake</h1>
          </div>
        </div>

        <div className="flex flex-1 justify-end gap-4 items-center">
          <div>
            <SearchBar />
          </div>
          <div>
            <UserIcons />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
