import React from "react";
import Link from "next/link";

// components
import { SlideHero, NavCategory } from ".";

// icons
import { BsTelephone } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex flex-col w-full px-3 max-w-[1140px]">
      <div className="flex w-full h-[50px]">
        <NavCategory />
        <div className="hidden gap-1 sm:flex sm:flex-1 items-center p-3 justify-end h-[50px]">
          <BsTelephone size={16} />
          <h2 className="text-base">Tele-vendas:</h2>
          <Link href="/" className="hover:text-primary text-base">
            0800-123-4567
          </Link>
        </div>
      </div>

      <div className="flex w-full">
        <SlideHero />
      </div>
    </section>
  );
};

export default Hero;
