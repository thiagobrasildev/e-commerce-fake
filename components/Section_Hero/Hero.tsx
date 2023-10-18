import React from "react";
import Link from "next/link";

// components
import { SlideHero, NavCategory } from "..";

// icons
import { BsTelephone } from "react-icons/bs";
import MenuDesktop from "../Menu/MenuDesktop";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full px-3 max-w-[1140px] lg:min-h-[450px]">
      <div className="hidden lg:flex lg:flex-1">
        <NavCategory />
      </div>
      <div className="flex-1 flex flex-col">
        <div className="flex w-full h-[50px]">
          <div className="lg:hidden">
            <NavCategory />
          </div>

          <MenuDesktop />

          <div className="hidden gap-1 sm:flex sm:flex-1 items-center p-3 justify-end h-[50px]">
            <BsTelephone size={16} />
            <h2 className="text-base">Tele-vendas:</h2>
            <Link href="/" className="hover:text-primary text-base">
              0800-123-4567
            </Link>
          </div>
        </div>

        <div className="flex w-full h-auto lg:min-h-[395px] justify-end">
          <SlideHero />
        </div>
      </div>
    </section>
  );
};

export default Hero;
