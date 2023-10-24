"use client";

import { AiOutlineClose } from "react-icons/ai";
import CartItem from "./CartItem";
import TotalPriceCart from "./TotalPriceCart";
import { useContext, useEffect } from "react";
import { CartContext, CartProduct } from "@/context/CartProvider";

type CartModalProps = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const CartModal = ({ isOpen, setIsOpen }: CartModalProps) => {
  const { products } = useContext(CartContext);

  const calculeTotalPrice = (products: CartProduct[]) => {
    const total = products.reduce((total, price) => {
      return total + price.price * price.quantity;
    }, 0);
    return total;
  };

  return (
    <div
      className="w-[100vw] max-h-[100vh] fixed z-50 top-0 left-0 bg-black/40 flex justify-end"
      onClick={() => setIsOpen(false)}
    >
      <div
        className="flex bg-white flex-col p-5 w-[70%] sm:w-[50%] lg:w-[30%] h-[100vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex w-full py-2 justify-end items-center">
          <AiOutlineClose size={20} onClick={() => setIsOpen(false)} />
        </div>
        <div className="pt-2 flex flex-col h-full">
          <h2 className="flex py-2 text-fontColor font-semibold border-b border-gray-300 h-[10%]">
            Carrinho
          </h2>

          <div className="flex flex-col flex-1 carrossel overflow-y-auto">
            {products.map((item) => (
              <CartItem
                key={item.title}
                name={item.title}
                imageUrl={item.image}
                price={item.price}
                id={item.id}
                quantity={item.quantity}
              />
            ))}
          </div>

          <div className="py-10 flex border-t border-gray-300 ">
            <TotalPriceCart totalPrice={calculeTotalPrice(products)} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartModal;
