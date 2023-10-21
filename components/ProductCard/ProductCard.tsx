"use client";

import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import Image from "next/image";

// icons
import { FaRegEye, FaRegHeart } from "react-icons/fa";

// components
import { Button } from "..";
import Link from "next/link";

type ProductCardProps = {
  name?: string;
  price?: number;
  imageUrl?: string;
  rating?: number;
};

const ProductCard = ({ name, price, imageUrl, rating }: ProductCardProps) => {
  return (
    <div className="flex w-full max-w-[180px] p-3 flex-col gap-2 justify-start rounded-md items-center cursor-pointer group border border-gray-400">
      <div className="flex w-full h-[200px] items-center justify-center overflow-hidden relative">
        <div className="flex flex-col w-[20%] absolute -top-4 right-3 pr-1 gap-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 group-hover:block transition-all duration-500">
          <button className="flex items-center justify-center p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white">
            <FaRegEye size={20} />
          </button>
          <button className="flex justify-center mt-3 items-center p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white">
            <FaRegHeart size={20} />
          </button>
        </div>
        <Image
          src={imageUrl!}
          alt="bolsa"
          width={200}
          height={200}
          className="object-cover w-full max-w-[200px] max-h-[200px]"
        />
      </div>
      <div className="flex w-full items-center justify-start">
        <Rating
          initialValue={rating}
          size={20}
          disableFillHover={true}
          allowHover={false}
          allowFraction
        />
      </div>
      <div className="flex w-full h-10 items-center justify-start">
        <p className="text-fontColor text-sm text-left hover:text-primary overflow-hidden overflow-ellipsis whitespace-nowrap">
          {name}
        </p>
      </div>
      <div className="flex w-full items-center justify-start">
        <p className="text-primary text-base font-semibold">R$ {price}</p>
      </div>
      <Button
        title="Adicionar ao carrinho"
        containerClass="bg-gray-200 p-2 text-fontColor text-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300"
      />
    </div>
  );
};

export default ProductCard;
