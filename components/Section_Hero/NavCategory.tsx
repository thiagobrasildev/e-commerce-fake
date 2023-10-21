"use client";

import { useEffect, useState } from "react";
// icons
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

// constants
import { category } from "../../constants/data";

// motion
import { motion } from "framer-motion";
import Link from "next/link";
const variants = {
  open: { y: "0%", opacity: 1 },
  closed: { y: "-150%", opacity: 0 },
};

type NavCategoryProps = {
  categoryPage?: boolean;
};

const NavCategory = ({ categoryPage }: NavCategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav
      className={`flex w-full pt-[1px] flex-col transition-all sm:max-w-[30%] lg:pr-4 absolute ${
        categoryPage ? "lg:absolute lg:maz-w-[30%]" : "lg:relative lg:max-w-[100%]"
      } max-w-[95%] z-30`}
    >
      <div className={`${categoryPage ? "lg:block" : "lg:hidden"}`}>
        <div
          onClick={() => setIsOpen(!isOpen)}
          className="flex w-full justify-between items-center bg-primary text-white p-3 rounded-t-md cursor-pointer"
        >
          <h2>Categorias</h2>
          <FaAngleDown />
        </div>
        {isOpen && (
          <div
            className={`flex flex-col w-full h-[50vh] sm:h-auto border-primary border-2 flex-nowrap overflow-y-scroll overflow-x-hidden bg-white`}
          >
            {category.map((item, index) => (
              <Link
                href={item.href}
                key={index}
                className="flex justify-start gap-2 items-center border-b-[1px] border-gray-300 py-3 mx-3"
              >
                <FaAngleRight />
                <p className="cursor-pointer hover:text-primary">{item.title}</p>
              </Link>
            ))}
          </div>
        )}
      </div>

      {/* menu desktop */}

      <div className={`${categoryPage ? "hidden" : "hidden lg:block"}`}>
        <div className="flex w-full justify-between items-center bg-primary text-white p-3 rounded-t-md">
          <h2>Categorias</h2>
          {/* <FaAngleDown /> */}
        </div>

        <div
          className={`flex flex-col w-full h-[50vh] sm:h-auto border-primary border-2 flex-nowrap bg-white`}
        >
          {category.map((item, index) => (
            <Link
              href={item.href}
              key={index}
              className="flex justify-start gap-2 items-center border-b-[1px] border-gray-300 py-3 mx-3"
            >
              <FaAngleRight />
              <p className="cursor-pointer hover:text-primary">{item.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavCategory;
