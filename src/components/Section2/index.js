import React from "react";

import Images from "./Images";
import Content from "./Content";
import Effect from "./Effect";

import { motion } from "framer-motion";

function Section2() {
  return (
    <div
      id="cum-te-putem-ajuta-noi"
      className="px-[6%] lg:px-[17rem] py-[5rem] bg-[#222429] relative"
    >
      {/* Background Section */}
      <div className="h-full w-1/3 bg-[#1c1e22] absolute top-0 left-0"></div>

      {/* Content Selection*/}
      <div className="w-full h-full relative z-10 flex flex-col-reverse lg:flex-row">
        <motion.div
          className="w-full lg:w-1/2 relative lg:block hidden"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <Images />
          <Effect />
        </motion.div>
        <motion.div
          className="w-full lg:w-1/2"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
        >
          <Content />
        </motion.div>
      </div>
    </div>
  );
}

export default Section2;
