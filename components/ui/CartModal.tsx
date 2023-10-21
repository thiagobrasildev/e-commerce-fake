import Link from "next/link";
import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const CartModal = () => {
  return (
    <div className="w-[100vw] h-[100vh] fixed z-50 top-0 left-0 bg-black/40 flex justify-end">
      <div className="flex bg-white flex-col p-5 w-[70%] ">
        <div className="flex w-full py-2 justify-end items-center">
          <AiOutlineClose size={20} />
        </div>
        <div className="pt-2 flex flex-col">
          <h2 className="flex py-2 text-fontColor font-semibold border-b border-gray-300">
            Carrinho
          </h2>

          <div className="flex flex-col"></div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
