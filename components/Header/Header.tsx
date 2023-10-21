"use client";

import React, { useState } from "react";
// icons
import { FaShoppingCart } from "react-icons/fa";

// components
import { MenuMobile, SearchBar, UserIcons } from "..";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="flex px-3 py-6 justify-start md:justify-center items-center border-b-[1px] border-gray-200">
      <div className="flex w-full md:max-w-[1140px] justify-between">
        <div className="flex flex-1 items-center gap-2">
          <div className="lg:hidden" onClick={() => setIsOpen(true)}>
            <GiHamburgerMenu size={25} />
          </div>
          <Link href="/">
            <div className="flex items-center justify-center gap-2">
              <FaShoppingCart size={25} className="text-primary" />
              <h1 className="text-fontColor font-semibold text-3xl">ShopFake</h1>
            </div>
          </Link>
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

      {isOpen ? <MenuMobile isOpen={isOpen} setIsOpen={setIsOpen} /> : null}
    </header>
  );
};

export default Header;
