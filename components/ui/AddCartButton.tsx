import { CartProduct } from "@/context/CartProvider";
import { IProducts } from "@/types/Products";
import React from "react";

type AddCartButtonProps = {
  titleActive?: string;
  titleDisable?: string;
  containerClass?: string;
  handleClick?: () => void;
};

const AddCartButton = ({
  titleActive,
  titleDisable,
  containerClass,
  handleClick,
}: AddCartButtonProps) => {
  return (
    <button
      className={`w-max rounded-3xl cursor-pointer text-fontColor bg-gray-200 hover:bg-primary hover:text-white transition-colors duration-300 ${containerClass}`}
      onClick={handleClick}
    >
      {titleActive}
    </button>
  );
};

export default AddCartButton;
