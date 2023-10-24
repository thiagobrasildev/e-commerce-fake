"use client";

import React, { useContext, useEffect, useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

// icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";

// components
import { Button } from "..";
import AddCartButton from "../ui/AddCartButton";
import { CartContext, CartProduct } from "@/context/CartProvider";
import { IProducts } from "@/types/Products";
import Link from "next/link";

type ProductCardProps = {
  product: IProducts;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addProductsToCart, products } = useContext(CartContext);

  const handleAddToCart = () => {
    addProductsToCart({ ...product, quantity: 1 });
  };

  return (
    <div className="flex w-full max-w-[180px] p-3 flex-col gap-2 justify-start rounded-md items-center cursor-pointer border border-gray-400">
      <Link
        href={`/product/${product?.id}`}
        className="flex w-full max-w-[180px] flex-col gap-2 justify-start items-center cursor-pointer "
      >
        <div className="flex w-full h-[200px] items-center justify-center overflow-hidden relative">
          {/* <div className="flex flex-col w-[20%] absolute -top-4 right-3 pr-1 gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 group-hover:block transition-all duration-500">
          <button className="flex items-center justify-center p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white">
            <FaRegEye size={20} />
          </button>
          <button className="flex justify-center mt-3 items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white">
            <FaRegHeart size={20} />
          </button>
        </div> */}
          <Image
            src={product?.image}
            alt="image"
            width={200}
            height={200}
            className="object-cover w-full max-w-[200px] max-h-[200px]"
          />
        </div>
        <div className="flex w-full items-center justify-start">
          <Rating
            initialValue={product?.rating.rate}
            size={20}
            disableFillHover={true}
            allowHover={false}
            allowFraction
          />
        </div>
        <div className="flex w-full h-10 items-center justify-start">
          <p className="text-fontColor text-sm text-left hover:text-primary overflow-hidden overflow-ellipsis whitespace-nowrap">
            {product?.title}
          </p>
        </div>
        <div className="flex w-full items-center justify-start">
          <p className="text-primary text-base font-semibold">R$ {product?.price}</p>
        </div>
      </Link>

      <AddCartButton
        handleClick={handleAddToCart}
        titleActive="Adicionar ao carrinho"
        titleDisable="Adicionado"
        containerClass=" p-2 text-sm "
      />
    </div>
  );
};

export default ProductCard;
