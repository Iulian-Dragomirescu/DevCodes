import React from "react";
import { motion } from "framer-motion";

import gaEventTracker from "../../../ReactGa";

import img_yellow from "../../../assets/icons/logo-yellow.png";
import img_white from "../../../assets/icons/logo-white.png";

function Header() {
  const img = () => {
    const x = parseInt(Math.floor(Math.random() * 2));

    return x === 0 ? img_yellow : img_white;
  };

  return (
    <motion.div
      className="absolute w-full h-28 border-neutral-500 border-b flex justify-between items-center px-[6%] lg:px-20 z-[15]"
      initial={{ top: "-150px" }}
      animate={{ top: "0px" }}
      transition={{ duration: 0.7 }}
    >
      <a href="/">
        <img className="w-32 lg:w-60" src={img()} alt="wda" />
      </a>
      <div className="flex gap-8">
        <button
          onClick={() => {
            gaEventTracker({ category: "menu" });
          }}
          type="button"
          data-drawer-target="drawer-navigation"
          data-drawer-show="drawer-navigation"
          aria-controls="drawer-navigation-label"
          data-drawer-backdrop="true"
        >
          <svg
            width={24}
            height={24}
            fill="none"
            stroke="#ffffff"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default Header;
