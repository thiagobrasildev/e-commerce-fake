"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

// constants
import { menu } from "../../constants/data";

const MenuDesktop = () => {
  const pathname = usePathname();
  return (
    <nav>
      <div className="hidden lg:flex flex-1 justify-between items-center h-[50px] gap-10">
        {menu.map((item, index) => (
          <Link
            href={item.href}
            key={index}
            className={`flex py-2  ${
              pathname === item.href ? "text-primary" : "text-fontColor"
            } hover:text-primary`}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default MenuDesktop;
