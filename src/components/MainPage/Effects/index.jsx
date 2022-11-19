import React from "react";
import { motion } from "framer-motion";

import bgRight from "../../../assets/images/right-curved-bg.png";
import bgRightWhite from "../../../assets/images/right-white-curve.webp";

function Effects() {
  return (
    <div className="absolute w-full h-full">
      <motion.div
        className="absolute z-20"
        initial={{ bottom: "-300px", right: "-300px" }}
        whileInView={{ bottom: "0px", right: "0px" }}
        transition={{ delay: 1, duration: 2 }}
      >
        <img src={bgRight} alt="right" />
      </motion.div>

      <motion.div
        className="absolute z-20"
        initial={{ top: "-300px", right: "-300px" }}
        whileInView={{ top: "0px", right: "0px" }}
        transition={{ delay: 1.5, duration: 3 }}
      >
        <img src={bgRightWhite} alt="right" />
      </motion.div>
    </div>
  );
}

export default Effects;
