"use client";

import React, { useEffect, useRef, useState } from "react";

// components
import { NavigationArrow, ProductCard } from "..";

// types
import { IProducts } from "@/types/Products";

// Api
import { getProducts } from "@/api/FakeStore";
import Link from "next/link";

const NewProducts = () => {
  const [productsNew, setProductsNew] = useState<IProducts[]>([]);
  const [productsBest, setProductsBest] = useState<IProducts[]>([]);
  const [changeProduct, setChangeProduct] = useState<boolean>(true);
  const carrosel = useRef<HTMLDivElement>(null);

  // filter Products
  useEffect(() => {
    getProducts()
      .then((data) => {
        const productNew = data.filter((resp: IProducts) => resp.id <= 10);
        setProductsNew(productNew);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  useEffect(() => {
    getProducts()
      .then((data) => {
        const productBest = data.filter((resp: IProducts) => resp.rating.rate >= 4.5);
        setProductsBest(productBest);
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
          <span
            onClick={() => setChangeProduct(true)}
            className={`text-lg text-fontColor font-semibold pr-3 cursor-pointer hover:text-primary transition-colors duration-300 ${
              changeProduct ? "activeLink" : ""
            } sm:border-r-2`}
          >
            Novidades
          </span>
          <span
            onClick={() => setChangeProduct(false)}
            className={`text-lg text-fontColor font-semibold pl-3 cursor-pointer hover:text-primary transition-colors duration-300 ${
              changeProduct ? "" : "activeLink"
            }`}
          >
            Mais vendidos
          </span>
        </div>
        <NavigationArrow left={handleArrowLeft} rigth={handleArrowRight} />
      </div>
      <div className="py-4 flex gap-5 overflow-x-scroll carrossel" ref={carrosel}>
        {changeProduct
          ? productsNew.map((item) => <ProductCard product={item} key={item.id} />)
          : productsBest.map((item) => <ProductCard product={item} key={item.id} />)}
      </div>
    </section>
  );
};

export default NewProducts;
