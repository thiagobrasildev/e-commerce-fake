import Link from "next/link";
import React from "react";

// icons
import { FaAngleRight } from "react-icons/fa";

const MenuItem = ({ title }: { title: string }) => {
  return (
    <Link
      href="/"
      className="flex w-full items-center text-sm text-fontColor/70 -m-1 cursor-pointer gap-2 group"
    >
      <FaAngleRight className="group-hover:text-primary" />
      <p className="flex flex-nowrap group-hover:text-primary group-hover:-translate-x-1 transition-all duration-300">
        {title}
      </p>
    </Link>
  );
};

export default MenuItem;
