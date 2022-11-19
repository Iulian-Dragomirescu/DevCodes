import React from "react";

import Content from "./Content";
// import ContentTwo from "./contentTwo"; // next update

import { motion } from "framer-motion";

function Section5() {
  return (
    <div
      id="contact"
      className="px-[6%] lg:px-[17rem] py-[5rem] gap-10 grid grid-cols-4"
    >
      {/* Content Selection*/}
      <motion.div
        className="col-span-4 lg:col-span-2 z-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <Content />
      </motion.div>

      {/* next update */}
      {/* <motion.div
        className="col-span-4 lg:col-span-2 z-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ContentTwo />
      </motion.div> */}
    </div>
  );
}

export default Section5;
