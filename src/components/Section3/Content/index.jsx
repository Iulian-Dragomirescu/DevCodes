import React from "react";

import { motion } from "framer-motion";

// Images import
import node from "../../../assets/icons/2560px-Node.js_logo_2015.svg.png";
import react from "../../../assets/icons/React_logo_wordmark.png";
import security from "../../../assets/icons/linux-logo.png";

function Content() {
  return (
    <div className="flex gap-10 flex-col">
      <div className="flex flex-col uppercase font-semibold text-6xl text-white tracking-wide">
        <h1>De ce sa ne</h1>
        <h1>
          alegi pe noi <span className="text-yellow-400">?</span>
        </h1>
      </div>
      <div className="w-[90%]">
        <p className="text-[#999b9f]">
          <span className="text-white font-semibold">Vă putem oferii</span>{" "}
          servicii de <span className="text-white font-semibold">calitate</span>{" "}
          și soluții pentru&nbsp;
          <span className="text-white font-semibold">imaginea ta online</span>
          <span className="text-yellow-400 font-semibold">&nbsp;!</span>
        </p>
      </div>

      <div className="flex flex-col gap-4">
        {[
          {
            name: "Back-end",
            src: node,
            alt: "node.js",
            percentage: "90%",
            width: { width: "90%" },
            transition: { duration: 1, delay: 0.1 },
          },
          {
            name: "Front-end",
            src: react,
            alt: "react.js",
            percentage: "85%",
            width: { width: "85%" },
            transition: { duration: 1 },
          },
          {
            name: "Security",
            src: security,
            alt: "linux-security",
            percentage: "96%",
            width: { width: "96%" },
            transition: { duration: 1, delay: 0.2 },
          },
        ].map((e, index) => (
          <div key={index}>
            <div class="flex justify-between mb-1">
              <span class="text-base font-medium text-[#e3a008] dark:text-white flex items-center justify-center gap-3">
                {e.name} <img className="w-14" src={e.src} alt={e.alt} />
              </span>
              <span class="text-sm font-medium text-[#e3a008] dark:text-white">
                {e.percentage}
              </span>
            </div>
            <div class="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <motion.div
                class="bg-[#e3a008] h-2.5 rounded-full"
                initial={{ width: 0 }}
                whileInView={e.width}
                transition={e.transition}
              ></motion.div>
            </div>
          </div>
        ))}
      </div>
      {/*  */}
    </div>
  );
}

export default Content;
