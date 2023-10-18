import React from "react";
import ServiceItem from "./ServiceItem";

// icons
import { BiSmile, BiSupport, BiMoney } from "react-icons/bi";
import { TbDiscount2 } from "react-icons/tb";

const Services = () => {
  return (
    <section className="w-full justify-between items-center items-center flex flex-col sm:flex-row sm:grid sm:grid-cols-2 lg:flex pt-5 gap-3 max-w-[1140px]">
      <ServiceItem
        icon={<BiSmile size={60} />}
        title="100% de satisfação"
        subtitle="Troque seu pedido se não gostar"
      />
      <ServiceItem
        icon={<BiSupport size={60} />}
        title="Suporte Online"
        subtitle="Suporte a qualquer momento"
      />
      <ServiceItem
        icon={<BiMoney size={60} />}
        title="Devolução de dinheiro"
        subtitle="Garantia de devolução em 7 dias"
      />
      <ServiceItem
        icon={<TbDiscount2 size={60} />}
        title="Desconto para membros"
        subtitle="Na primeira compra"
      />
    </section>
  );
};

export default Services;
