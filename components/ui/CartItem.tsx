"use client";

import { CartContext } from "@/context/CartProvider";
import Image from "next/image";
import React, { useContext } from "react";

// icons
import { FaTrashAlt } from "react-icons/fa";

type CartItemProps = {
  name?: string;
  price?: number;
  imageUrl?: string;
  id?: number | undefined;
  quantity: number;
};

const CartItem = ({ imageUrl, name, price, id, quantity }: CartItemProps) => {
  const { removeProductsFromCart } = useContext(CartContext);

  const remove = () => {
    removeProductsFromCart(id!);
  };

  const totalPriceItem = price! * quantity;

  return (
    <div className="flex w-full  items-center py-3">
      <div className="flex w-full h-[50px] flex-1 max-w-[15%]">
        <Image
          src={imageUrl!}
          alt="item cart"
          width={200}
          height={200}
          className="object-contain w-full h-full"
        />
      </div>
      <div className="flex flex-col flex-1 max-w-[85%] px-4">
        <div className="flex w-full items-center justify-start">
          <p className="text-fontColor pb-2 text-sm text-left font-semibold pr-3 hover:text-primary overflow-hidden overflow-ellipsis whitespace-nowrap">
            {name}
          </p>
        </div>
        <span className="flex w-full justify-between items-center">
          <span className="flex flex-1 gap-2">
            <p className="text-fontColor text-sm font-semibold">{quantity} x</p>
            <p className="text-fontColor text-sm font-semibold text-primary items-center">
              R$ {totalPriceItem}
            </p>
          </span>
          <FaTrashAlt
            size={12}
            className="cursor-pointer hover:text-red-600"
            onClick={remove}
          />
        </span>
      </div>
    </div>
  );
};

export default CartItem;
