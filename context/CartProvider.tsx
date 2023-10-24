"use client";

import { IProducts } from "@/types/Products";
import React, { createContext, useState, ReactNode } from "react";

export interface CartProduct extends IProducts {
  quantity: number;
}

interface ICartContext {
  products: CartProduct[];
  cardTotalPrice: number;
  addProductsToCart: (produtct: CartProduct) => void;
  removeProductsFromCart: (idItem: number) => void;
}

const CartContext = createContext<ICartContext>({
  products: [],
  cardTotalPrice: 0,
  addProductsToCart: () => {},
  removeProductsFromCart: () => {},
});

const CardProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);

  const addProductsToCart = (product: CartProduct) => {
    const productIsAlreayOnCart = products.some(
      (cartProduct) => cartProduct.id === product.id
    );

    if (productIsAlreayOnCart) {
      setProducts((prev) =>
        prev.map((cartProduct) => {
          if (cartProduct.id === product.id) {
            return {
              ...cartProduct,
              quantity: cartProduct.quantity + product.quantity,
            };
          }
          return cartProduct;
        })
      );

      return;
    }
    setProducts((prev) => [...prev, product]);
  };

  const removeProductsFromCart = (idItem: number | undefined) => {
    const updateCart = products.filter((item) => item.id !== idItem);
    setProducts(updateCart);
  };

  return (
    <CartContext.Provider
      value={{ products, addProductsToCart, removeProductsFromCart, cardTotalPrice: 0 }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CardProvider, CartContext };
