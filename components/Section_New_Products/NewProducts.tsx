import React from "react";
// components
import { NavigationArrow } from "..";

const NewProducts = () => {
  return (
    <section className="w-full max-w-[1140px] h-[300px] px-3 py-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center flex-1">
          <span
            className={`text-lg text-fontColor font-semibold pr-3 cursor-pointer hover:text-primary transition-colors duration-300 activeLink sm:border-r-2`}
          >
            Novidades
          </span>
          <span
            className={`text-lg text-fontColor font-semibold pl-3 cursor-pointer hover:text-primary transition-colors duration-300`}
          >
            Mais vendidos
          </span>
        </div>
        <NavigationArrow />
      </div>
    </section>
  );
};

export default NewProducts;
