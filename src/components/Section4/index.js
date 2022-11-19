import React from "react";

import Answers from "./Answers";
import Content from "./Content";

import { motion } from "framer-motion";

function Section4() {
  return (
    <div
      id="cum-lucram-noi"
      className="px-[6%] lg:px-[17rem] py-[5rem] grid grid-cols-4 relative gap-10 bg-[#222429]"
    >
      {/* Background Section */}
      <div className="h-full w-[20%] bg-[#1c1e22] absolute top-0 left-0"></div>

      {/* Content Selection*/}
      <motion.div
        className="row-start-2 lg:row-start-auto col-span-4 lg:col-span-2 z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <Content />
      </motion.div>

      <motion.div
        className="row-start-1 lg:row-start-auto col-span-4 lg:col-span-2 z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <Answers />
      </motion.div>
    </div>
  );
}

export default Section4;
