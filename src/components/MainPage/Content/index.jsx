import React from "react";

import { motion } from "framer-motion";

import Button from "../../../assets/Button/Style_1";

function Content() {
  const letterJump = (e) => {
    const buffer = [];
    for (let i = 0; i < e.length; i++) {
      const element = e[i];

      buffer.push(
        <span className="hover:text-yellow-400 cursor-pointer hover:animate-pulse hover:-translate-y-6 ease-in-out duration-100">
          {element}
        </span>
      );
    }

    return (
      <div>
        {buffer.map((e, index) => (
          <React.Fragment key={index}>{e}</React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <motion.div
      className="absolute flex flex-col justify-center gap-14 w-full h-full p-[6%] lg:p-[17rem] z-10"
      initial={{ top: "100px", opacity: 0 }}
      animate={{ top: "0px", opacity: 1 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex">
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-9xl flex flex-col font-bold text-white uppercase">
          {letterJump("Servicii")}
          {letterJump("Web")}
          {letterJump("Development")}
        </h1>
        <span className="relative p-1 items-end flex">
          <span class="animate-ping absolute inline-flex rounded-full bg-yellow-400 opacity-75 h-5 w-5"></span>
          <span class="absolute inline-flex rounded-full h-5 w-5 bg-yellow-500"></span>
        </span>
      </div>
      <div>
        <Button title="VEZI SERVICII" href="#serviciile-noastre" />
      </div>
    </motion.div>
  );
}

export default Content;
