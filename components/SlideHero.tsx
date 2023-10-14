"use client";

import Image from "next/image";
import React from "react";

// motion
import { motion } from "framer-motion";

const SlideHero = () => {
  return (
    <div className="flex w-full">
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ repeat: Infinity, duration: 5 }}
      >
        <Image src="/slide-man.jpg" alt="slide man" width={200} height={200} />
      </motion.div>
    </div>
  );
};

export default SlideHero;
