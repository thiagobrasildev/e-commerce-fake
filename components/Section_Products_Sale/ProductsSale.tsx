"use client";

import React, { useEffect, useRef, useState } from "react";

// components
import { NavigationArrow, ProductCard } from "..";

// types
import { IProducts } from "@/types/Products";

// Api
import { getProducts } from "@/api/FakeStore";
import Link from "next/link";

const ProductsSale = () => {
  const [products, setProducts] = useState<IProducts[]>([]);
  const carrosel = useRef<HTMLDivElement>(null);

  // filter Products
  useEffect(() => {
    getProducts()
      .then((data) => {
        const productSale = data.filter((resp: IProducts) => resp.price <= 50.0);
        setProducts(productSale);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleArrowRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carrosel.current) {
      carrosel.current.scrollLeft += 600;
    }
  };

  const handleArrowLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (carrosel.current) {
      carrosel.current.scrollLeft -= 600;
    }
  };
  return (
    <section className="w-full max-w-[1140px] px-3 py-5">
      <div className="flex justify-between items-center">
        <div className="flex justify-start items-center flex-1">
          <span className={`text-lg text-fontColor font-semibold pr-3`}>
            Produtos em promoção
          </span>
        </div>
        <NavigationArrow left={handleArrowLeft} rigth={handleArrowRight} />
      </div>
      <div className="py-4 flex gap-5 overflow-x-scroll carrossel" ref={carrosel}>
        {products.map((item) => (
          <ProductCard product={item} key={item.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsSale;
