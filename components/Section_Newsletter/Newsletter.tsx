import Image from "next/image";
import React from "react";

// icons
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaGooglePlusG,
  FaInstagram,
} from "react-icons/fa";

const Newsletter = () => {
  return (
    <section className="w-full bg-primary flex py-6 sm:py-11 justify-center items-center">
      <div className="w-full max-w-[1140px] flex flex-col lg:flex-row gap-5 lg:gap-3 lg:px-4 items-center ">
        <div className="flex justify-center items-center">
          <Image
            src="/email-icon.svg"
            alt="email svg"
            width={40}
            height={40}
            className="hidden sm:flex"
          />
          <h2 className="text-xl lg:text-lg text-white font-semibold px-1">
            Cadastre-se e Assine Nossa Newsletter
          </h2>
        </div>
        <div className="bg-white flex rounded-3xl pl-2">
          <input
            type="text"
            className="rounded-3xl p-2 outline-none border-none w-[250px] lg:w-[220px] text-fontColor"
          />
          <button className="bg-[#F0F0F0] rounded-tr-[24px] rounded-br-[24px] px-5 lg:px-3 text-fontColor hover:bg-[#e0e0e0] transition-colors duration-300">
            Inscrever-se
          </button>
        </div>
        <div className="flex justify-center items-center gap-4 px-8 text-white">
          <FaFacebookF
            size={25}
            className="hover:text-black cursor-pointer"
            title="Facebook"
          />
          <FaTwitter
            size={25}
            className="hover:text-blue-400 cursor-pointer"
            title="Twitter"
          />
          <FaYoutube
            size={25}
            className="hover:text-red-700 cursor-pointer"
            title="Youtube"
          />
          <FaGooglePlusG
            size={25}
            className="hover:text-red-700 cursor-pointer"
            title="Google Plus"
          />
          <FaInstagram
            size={25}
            className="hover:text-black cursor-pointer"
            title="Instagram"
          />
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
