"use client";

import Image from "next/image";
import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SlideHero = () => {
  return (
    <section className="flex w-full max-w-[800px] max-h-[200px] md:max-h-[900px] p-0 pt-8">
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
          <div className="w-full h-full justify-center items-center flex">
            <Image
              src="/slide-woman.jpg"
              alt="slide 01"
              fill
              className="w-[100%]"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-[300px] h-[300px] justify-center items-center flex">
            <Image
              src="/slide-man.jpg"
              alt="slide 01"
              fill
              className="w-[100%]"
            />
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default SlideHero;
