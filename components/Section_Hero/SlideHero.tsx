"use client";

import React from "react";
import Image from "next/image";

// swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// framer motion
import { motion } from "framer-motion";

// components
import { Button } from "..";

const SlideHero = () => {
  return (
    <section className="flex w-full lg:max-w-[800px] max-h-[200px] sm:max-h-[600px] md:max-h-[900px] lg:max-h-[920px] p-0 pt-3 lg:pt-0 ">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="w-[300px] h-[300px] sm:h-[350px] flex ">
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.8 }}
              className="absolute flex flex-col w-[40%] gap-2 left-3 top-6 sm:left-6 sm:top-8 md:left-10 md:top-12"
            >
              <p className="text-xs text-fontColor sm:text-sm md:text-base">
                Oferta exclusiva
              </p>
              <h2 className="text-base font-bold text-fontColor sm:text-lg md:text-xl">
                Roupas femininas 50% de desconto
              </h2>
              <Button
                title="Comprar"
                containerClass="bg-primary text-white px-4 py-1 text-sm mt-2 sm:text-base md:text-md"
              />
            </motion.div>
            <Image
              src="/slide-woman.jpg"
              alt="slide 01"
              fill
              className="w-[100%] -z-50"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] md:h-[350px] flex">
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 10 }}
              transition={{ duration: 0.8 }}
              className="absolute flex flex-col w-[40%] gap-2 left-3 top-6 sm:left-6 sm:top-8 md:left-10 md:top-12"
            >
              <p className="text-xs text-fontColor sm:text-sm md:text-base">
                Oferta exclusiva
              </p>
              <h2 className="text-base font-bold text-fontColor sm:text-lg md:text-xl">
                Roupas masculinas 30% de desconto
              </h2>
              <Button
                title="Comprar"
                containerClass="bg-primary text-white px-4 py-1 text-sm mt-2 sm:text-base md:text-md"
              />
            </motion.div>
            <Image src="/slide-man.jpg" alt="slide 01" fill className="w-[100%] -z-50" />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlideHero;
