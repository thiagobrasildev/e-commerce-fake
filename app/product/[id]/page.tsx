"use client";

import { NavCategory, NavigationArrow, Phone, ProductCard } from "@/components";
import MenuDesktop from "@/components/Menu/MenuDesktop";
import QuantityProduct from "@/components/ui/QuantityProduct";
import Image from "next/image";

import React, { useEffect, useRef, useState, useContext } from "react";
import { Rating } from "react-simple-star-rating";

// types
import { IProducts } from "@/types/Products";

// Api
import { getProducts } from "@/api/FakeStore";
import { getSingleProducts } from "@/api/FakeStore";
import { useParams } from "next/navigation";
import Link from "next/link";
import AddCartButton from "@/components/ui/AddCartButton";
import { CartContext } from "@/context/CartProvider";

const SingleProduct = () => {
  const { addProductsToCart } = useContext(CartContext);

  const [products, setProducts] = useState<IProducts[]>([]);
  const [product, setProduct] = useState<IProducts>();
  const carrosel = useRef<HTMLDivElement>(null);
  const params = useParams();
  const nameProduct = params.id;
  const cartProduct = { ...product! };
  const [quantity, setQuantity] = useState(1);

  // Single Product
  useEffect(() => {
    getSingleProducts(params.id)
      .then((data) => {
        setProduct(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  // filter Products
  useEffect(() => {
    getProducts()
      .then((data) => {
        const productSale = data.filter(
          (resp: IProducts) => resp.category == product?.category
        );
        setProducts(productSale);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [product]);

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

  const handleAddToCart = () => {
    addProductsToCart({ ...cartProduct, quantity: quantity });
  };
  return (
    <section className="w-full flex-1 min-h-[600px] flex justify-center">
      <div className="flex flex-col w-full max-w-[1140px] px-3 lg:px-0 pb-10 overflow-hidden">
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

        <div className="flex w-full flex-col pt-[60px] mr-1 lg:flex-row lg:gap-5">
          <div className="flex w-full lg:min-w-[40%]">
            <Image
              src={product?.image!}
              alt="imagem"
              width={500}
              height={500}
              className="w-full h-[500px] flex rounded-md object-contain justify-center items-center"
            />
          </div>
          <div className="py-4 lg:py-0 min-w-[60%]">
            <h1 className="text-fontColor text-lg font-semibold text-left whitespace-wrap">
              {product?.title}
            </h1>
            <span>
              <Rating
                initialValue={3.0}
                size={20}
                disableFillHover={true}
                allowHover={false}
                allowFraction
              />
            </span>
            <h2 className="text-primary text-lg font-semibold py-4">
              R$ {product?.price}
            </h2>
            <div className="text-fontColor/80 pb-4">
              <p className="">{product?.description}</p>
            </div>
            <div className="w-full py-4 flex gap-2 sm:gap-0">
              <QuantityProduct quantity={quantity} setQuantity={setQuantity} />
              <div className="flex flex-1 min-w-[85%]">
                <AddCartButton
                  titleActive="Adicionar ao carrinho"
                  titleDisable="Adicionado"
                  containerClass="bg-primary text-white rounded-3xl px-4 sm:w-[40%] hover:bg-primary/90"
                  handleClick={handleAddToCart}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="py-5 lg:mt-10">
          <div className="flex items-center justify-between">
            <h2 className="text-fontColor text-lg font-semibold lg:text-xl">
              Produtos relacionados
            </h2>
            <NavigationArrow left={handleArrowLeft} rigth={handleArrowRight} />
          </div>

          <div className="py-4 flex gap-5 overflow-x-scroll carrossel" ref={carrosel}>
            {products.map((item) => (
              <ProductCard product={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
