"use client";

import React, { useContext } from "react";
// icons
import { FaRegUser, FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import { CartContext } from "@/context/CartProvider";

type UserIconsProps = {
  onClick?: () => void;
};

const UserIcons = ({ onClick }: UserIconsProps) => {
  const { products } = useContext(CartContext);

  const totalItemInCart = products.length;
  return (
    <div className="flex gap-4">
      <FaRegUser size={25} className="cursor-pointer" />
      <div className="icon cursor-pointer">
        <FaRegHeart size={25} />
      </div>
      <div className="icon relative cursor-pointer" onClick={onClick}>
        <span className="absolute top-0 right-[-5px] text-[10px] font-semibold text-center rounded-full bg-primary text-white p-2 justify-center items-center flex w-[10px] h-[10px]">
          {totalItemInCart}
        </span>
        <BsCart3 size={25} />
      </div>
    </div>
  );
};

export default UserIcons;
