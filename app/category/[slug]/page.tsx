"use client";

import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";

// components
import { Filter, NavCategory, Phone, ProductCard } from "@/components";
import MenuDesktop from "@/components/Menu/MenuDesktop";

// types
import { IProducts } from "@/types/Products";

// Api
import { getProducts } from "@/api/FakeStore";
import Link from "next/link";

const Category = () => {
  const params = useParams();
  const [category, setCategory] = useState<IProducts[]>([]);
  const [categoryPrice, setCategoryPrice] = useState<IProducts[]>([]);

  const nameCategory = () => {
    if (params.slug === "acessorios") {
      return "jewelery";
    }
    if (params.slug === "feminino") {
      return "women's clothing";
    }
    if (params.slug === "masculino") {
      return "men's clothing";
    }
    if (params.slug === "eletronicos") {
      return "electronics";
    }
  };

  const changeParams = () => {
    if (params.slug === "acessorios") {
      return "Acessórios";
    }
    if (params.slug === "feminino") {
      return "Feminino";
    }
    if (params.slug === "masculino") {
      return "Masculino";
    }
    if (params.slug === "eletronicos") {
      return "Eletrônicos";
    }
    if (params.slug === "de_1_a_50") {
      return "Preços entre R$ 1,00 e R$ 50,00";
    }
    if (params.slug === "de_51_a_100") {
      return "Preços entre R$ 51,00 e R$ 100,00";
    }
    if (params.slug === "de_101_a_200") {
      return "Preços entre R$ 101,00 e R$ 200,00";
    }
    if (params.slug === "acima_de_201") {
      return "Preços acima de R$ 200,00";
    }
  };

  const categoryPath = nameCategory();

  // filter Products
  useEffect(() => {
    getProducts()
      .then((data) => {
        const productCategory = data.filter(
          (resp: IProducts) => resp.category === categoryPath
        );
        setCategory(productCategory);

        if (params.slug === "de_1_a_50") {
          let minMax = [1, 50];
          const productCategoryPrice = data.filter(
            (resp: IProducts) => resp.price >= minMax[0] && resp.price <= minMax[1]
          );
          setCategoryPrice(productCategoryPrice);
          params.slug = "Produtos entre R$ 1,00 e R$ 50,00";
        }

        if (params.slug === "de_51_a_100") {
          let minMax = [51, 100];
          const productCategoryPrice = data.filter(
            (resp: IProducts) => resp.price >= minMax[0] && resp.price <= minMax[1]
          );
          setCategoryPrice(productCategoryPrice);
          params.slug = "Produtos entre R$ 51,00 e R$ 100,00";
        }

        if (params.slug === "de_101_a_200") {
          let minMax = [101, 200];
          const productCategoryPrice = data.filter(
            (resp: IProducts) => resp.price >= minMax[0] && resp.price <= minMax[1]
          );
          setCategoryPrice(productCategoryPrice);
          params.slug = "Produtos entre R$ 101,00 e R$ 200,00";
        }

        if (params.slug === "acima_de_201") {
          let min = 201;
          const productCategoryPrice = data.filter(
            (resp: IProducts) => resp.price >= min
          );
          setCategoryPrice(productCategoryPrice);
          params.slug = "Produtos acima de R$ 200,00";
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  console.log(categoryPrice);

  return (
    <section className="w-full flex-1 min-h-[600px] flex justify-center">
      <div className="flex flex-col w-full max-w-[1140px] px-4 lg:px-0 pb-10 relative overflow-hidden">
        <div className="flex justify-between w-full">
          <div className="flex flex-1 lg:max-w-[30%]">
            <NavCategory categoryPage={true} />
          </div>
          <div className="flex flex-1 w-full">
            <MenuDesktop />
          </div>
          <div>
            <Phone />
          </div>
        </div>

        <div className="flex w-full h-10 items-center justify-between pt-[80px] sm:pt-[60px]">
          <h2 className="text-fontColor font-semibold text-lg">
            Categoria/<span>{changeParams()}</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 w-full py-10 h-auto">
          {category &&
            category.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id}>
                <ProductCard product={item} />
              </Link>
            ))}

          {categoryPrice &&
            categoryPrice.map((item) => (
              <Link href={`/product/${item.id}`} key={item.id}>
                <ProductCard product={item} />
              </Link>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
