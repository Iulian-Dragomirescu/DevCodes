import React from "react";

import Content from "./Content";
import ContentTwo from "./ContentTwo";

import { motion } from "framer-motion";

function Section3() {
  return (
    <div
      id="de-ce-sa-ne-alegi-pe-noi"
      className="px-[6%] lg:px-[17rem] py-[5rem] grid grid-cols-4 relative gap-16 lg:gap-10"
    >
      <motion.div
        className="col-span-4 lg:col-span-2 pb-10"
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.05 }}
        viewport={{ once: true }}
      >
        <Content />
      </motion.div>

      <motion.div
        className="col-span-4 lg:col-span-2 pb-10"
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        viewport={{ once: true }}
      >
        <ContentTwo />
      </motion.div>
    </div>
  );
}

export default Section3;
