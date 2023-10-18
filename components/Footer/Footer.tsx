"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// components
import MenuMobile from "./MenuMobile";

// icons
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import MenuItem from "./MenuItem";

const Footer = () => {
  return (
    <footer className="w-full pt-10 justify-center items-center flex flex-col">
      <div className="flex flex-col w-full max-w-[1140px] px-4 lg:px-4 pb-10">
        <div className="lg:hidden">
          <MenuMobile title="Informações de contato">
            <div>
              <div className="flex items-start py-3 gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <p className="text-fontColor/70 text-sm mt-[-5px]">
                  Rua 60, Ed. São Marcos, Loja 02, São Paulo, Brasil
                </p>
              </div>
              <div className="flex items-center py-3 gap-2">
                <FaPhoneAlt className="text-primary" />
                <p className="text-fontColor/70 text-sm">0800-123-4567</p>
              </div>
              <div className="flex items-center py-3 gap-2">
                <FaEnvelope className="text-primary" />
                <Link href="/">
                  <p className="text-fontColor/70 text-sm hover:text-primary">
                    contato@cartfake.com
                  </p>
                </Link>
              </div>
            </div>
          </MenuMobile>
          <MenuMobile title="Produtos">
            <div className="flex flex-col gap-5">
              <MenuItem title="Termos e condições" />
              <MenuItem title="Novos produtos" />
              <MenuItem title="Mais vendidos" />
              <MenuItem title="Pagamento seguro" />
              <MenuItem title="Serviços" />
            </div>
          </MenuMobile>
          <MenuMobile title="Informações">
            <div className="flex flex-col gap-5">
              <MenuItem title="Entregas" />
              <MenuItem title="Noticias" />
              <MenuItem title="Sobre nós" />
              <MenuItem title="Pagamento seguro" />
              <MenuItem title="Contatos" />
            </div>
          </MenuMobile>
          <MenuMobile title="Sobre">
            <div className="flex flex-col gap-5">
              <MenuItem title="Mídias sociais" />
              <MenuItem title="Promoções" />
              <MenuItem title="Sobre nós" />
              <MenuItem title="Portfólio" />
              <MenuItem title="Mapa do site" />
            </div>
          </MenuMobile>
          <MenuMobile title="Download App">
            <div className="flex flex-col gap-5">
              <Link href="/" className="cursor-pointer">
                <Image src="/google-play.png" alt="google play" width={120} height={50} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src="/app-store.png" alt="google play" width={120} height={50} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/windows-store.png"
                  alt="google play"
                  width={120}
                  height={50}
                />
              </Link>
            </div>
          </MenuMobile>
        </div>
        <div className="hidden lg:flex">
          <div className="flex flex-col w-[25%] pr-7 border-r border-gray-300">
            <h2 className="text-base text-fontColor font-semibold pb-3">
              Informações de contato
            </h2>
            <div>
              <div className="flex items-start py-3 gap-2">
                <FaMapMarkerAlt className="text-primary" />
                <p className="text-fontColor/70 text-sm mt-[-5px]">
                  Rua 60, Ed. São Marcos, Loja 02, São Paulo, Brasil
                </p>
              </div>
              <div className="flex items-center py-3 gap-2">
                <FaPhoneAlt className="text-primary" />
                <p className="text-fontColor/70 text-sm">0800-123-4567</p>
              </div>
              <div className="flex items-center py-3 gap-2">
                <FaEnvelope className="text-primary" />
                <Link href="/">
                  <p className="text-fontColor/70 text-sm hover:text-primary">
                    contato@cartfake.com
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-1 flex-col px-7 border-r border-gray-300">
            <h2 className="text-base text-fontColor font-semibold pb-5">Produtos</h2>
            <div className="flex flex-col gap-5">
              <MenuItem title="Termos e condições" />
              <MenuItem title="Novos produtos" />
              <MenuItem title="Mais vendidos" />
              <MenuItem title="Pagamento seguro" />
              <MenuItem title="Serviços" />
            </div>
          </div>
          <div className="flex flex-1 flex-col px-7 border-r border-gray-300">
            <h2 className="text-base text-fontColor font-semibold pb-5">Informações</h2>
            <div className="flex flex-col gap-5">
              <MenuItem title="Entregas" />
              <MenuItem title="Noticias" />
              <MenuItem title="Sobre nós" />
              <MenuItem title="Pagamento seguro" />
              <MenuItem title="Contatos" />
            </div>
          </div>
          <div className="flex flex-1 flex-col px-7 border-r border-gray-300">
            <h2 className="text-base text-fontColor font-semibold pb-5">Sobre</h2>
            <div className="flex flex-col gap-5">
              <MenuItem title="Mídias sociais" />
              <MenuItem title="Promoções" />
              <MenuItem title="Sobre nós" />
              <MenuItem title="Portfólio" />
              <MenuItem title="Mapa do site" />
            </div>
          </div>
          <div className="flex flex-1 flex-col px-7">
            <h2 className="text-base text-fontColor font-semibold pb-5">Download App</h2>
            <div className="flex flex-col gap-5">
              <Link href="/" className="cursor-pointer">
                <Image src="/google-play.png" alt="google play" width={120} height={50} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image src="/app-store.png" alt="google play" width={120} height={50} />
              </Link>
              <Link href="/" className="cursor-pointer">
                <Image
                  src="/windows-store.png"
                  alt="google play"
                  width={120}
                  height={50}
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full bg-primary p-6 justify-center items-center flex flex-col gap-2">
        <p className="text-base text-white">Copyright &copy; 2023 CardFake</p>
        <div className="flex justify-center items-center gap-4 w-full">
          <Image src="/american-express.png" alt="card" width={40} height={40} />
          <Image src="/card.png" alt="card" width={40} height={40} />
          <Image src="/visa.png" alt="card" width={40} height={40} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
