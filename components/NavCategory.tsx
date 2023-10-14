"use client";

import { useEffect, useState } from "react";
// icons
import { FaAngleDown, FaAngleRight } from "react-icons/fa";

// constants
import { category } from "../constants/data";

// motion
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1 },
  closed: { opacity: 0 },
};

const NavCategory = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, []);

  return (
    <nav className="flex w-full pt-[1px] flex-col transition-all sm:max-w-[30%] lg:max-w-[20%] absolute max-w-[95%] z-30">
      <div
        onClick={() => setIsOpen((isOpen) => !isOpen)}
        className="flex w-full justify-between items-center bg-primary text-white p-3 rounded-t-md"
      >
        <h2>Categorias</h2>
        <FaAngleDown />
      </div>

      <motion.div
        animate={isOpen ? "open" : "closed"}
        variants={variants}
        initial={false}
        className={`flex flex-col w-full h-[50vh] sm:h-auto border-primary border-2 flex-nowrap overflow-y-scroll overflow-x-hidden bg-white`}
      >
        {category.map((item, index) => (
          <span
            key={index}
            className="flex justify-start gap-2 items-center border-b-[1px] border-gray-300 py-3 mx-3"
          >
            <FaAngleRight />
            <p className="cursor-pointer hover:text-primary">{item}</p>
          </span>
        ))}
      </motion.div>
    </nav>
  );
};

export default NavCategory;
