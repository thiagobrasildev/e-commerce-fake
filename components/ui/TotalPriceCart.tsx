import React from "react";
import { Button } from "..";

type TotalPriceCartProps = {
  totalPrice: number;
};

const TotalPriceCart = ({ totalPrice }: TotalPriceCartProps) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div className="flex items-center justify-end px-3">
        <p className="text-fontColor text-md font-semibold">
          Total:{" "}
          <span className="text-primary font-semibold">R$ {totalPrice.toFixed(2)}</span>
        </p>
      </div>
      <div className="flex justify-center items-center w-full gap-4 text-w">
        <Button
          title="Ver Carrinho"
          containerClass="bg-gray-300 px-4 py-2 text-fontText font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
        ></Button>
        <Button
          title="Checkout"
          containerClass="bg-gray-300 px-4 py-2 text-fontText font-semibold hover:bg-primary hover:text-white transition-colors duration-300"
        ></Button>
      </div>
    </div>
  );
};

export default TotalPriceCart;
