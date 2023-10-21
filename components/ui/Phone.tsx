import Link from "next/link";
import React from "react";

// icons
import { BsTelephone } from "react-icons/bs";

const Phone = () => {
  return (
    <div className="hidden gap-1 sm:flex sm:flex-1 items-center p-3 justify-end h-[50px]">
      <BsTelephone size={16} />
      <h2 className="text-base">Tele-vendas:</h2>
      <Link href="/" className="hover:text-primary text-base">
        0800-123-4567
      </Link>
    </div>
  );
};

export default Phone;
