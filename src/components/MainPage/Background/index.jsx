import React from "react";
import { motion } from "framer-motion";

import image from "../../../assets/images/main.webp";

function Background() {
  return (
    <motion.div
      className="absolute w-full h-full"
      initial={{ scale: "100%" }}
      whileInView={{ scale: "110%" }}
      transition={{ delay: 0.5, duration: 7, type: "spring" }}
    >
      <div
        className="w-full h-full bg-cover bg-center grayscale before:content-['*'] before:bg-gray-900/50 before:block before:w-full before:h-full"
        style={{ backgroundImage: `url(${image}` }}
      ></div>
    </motion.div>
  );
}

export default Background;
